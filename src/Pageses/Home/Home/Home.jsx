import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import AllPost from "../../AllPost/AllPost";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleApost = (data) => {
    const image = data.img_url[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=068be9ca709d313a4a71654614ff6eea";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const post = {
            details: data.details,
            name: user.displayName,
            email: user.email,
            userPhoto: user.photoURL,
            photo: imgData.data.display_url,
          };

          //  save the product to the mongodb
          fetch("https://linked-in-2-0-eight.vercel.app/post", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`Your post on live NOW!`);
              navigate("/media");
            });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className=" p-5 w-[550px] bg-base-300">
          <div className=" flex mb-10 justify-center items-center">
            <div className=" ">
              <div className="">
                {user?.photoURL ? (
                  <img
                    className="w-20 mb-2  text-left rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                    alt=""
                  />
                )}
              </div>
              <form
                onSubmit={handleSubmit(handleApost)}
                noValidate=""
                action=""
                className="ng-untouched ng-pristine ng-valid"
              >
                <div className="">
                  <textarea
                    id="message"
                    rows="4"
                    name="details"
                    {...register("details", {
                      required: "Please enter some message",
                    })}
                    className=" block w-full appearance-none  bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="What's on your mind?"
                  ></textarea>
                  {errors.details && (
                    <div className="alert alert-error mt-1 py-2 block shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errors.details?.message}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full mt-2 px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Photo:
                  </label>
                  <input
                    {...register("img_url", {
                      required: "Please give a photo",
                    })}
                    type="file"
                    id="image"
                    name="img_url"
                    accept="image/*"
                  />
                  {errors.img_url && (
                    <div className="alert alert-error mt-1 py-2 block shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errors.img_url?.message}</span>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  htmlFor="profileEdit"
                  className="text-center block w-full appearance-none  bg-black border border-gray-200 text-white font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5"
                >
                  POST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AllPost />
    </div>
  );
};

export default Home;
