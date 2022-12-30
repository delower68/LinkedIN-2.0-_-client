import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("Welcome sir.. Sign Up Successfull");
        navigate("/");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveUser = (name, email, type) => {
    const user = { name, email, type };
    fetch("https://linked-in-2-0-eight.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user ", data);
      });
  };

  return (
    <div>
      <div className="lg:flex justify-center items-center ">
        <div
          className="hero w-[390px] h-[680px] bg-cover"
          style={{
            backgroundImage: `url("https://onlineprofilepros.com/wp-content/uploads/2019/10/linkedin-login.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-25"></div>

          <h1 className="z-10 pt-36 -ml-24 text-2xl font-semibold text-white ">
            Spend your Time <br /> here guys{" "}
          </h1>
          <p className=" -ml-36 pt-64 text-sm font-thin text-white ">
            And share your creativity <br /> Let's go for share{" "}
          </p>
        </div>
        <div className="px-5 w-[450px] lg:-ml-24 text-center bg-slate-100 z-20 py-20  bg-blend-screen">
          <h1 className="text-2xl  font-bold">Welcome to your world</h1>
          <div className=" float-right my-2 w-24  font-thin">
            <p className="text-center p-1  text-sm rounded-md sm:w-auto focus:outline-none  dark:text-gray-100 dark:bg-gray-900">
              {" "}
              thank you !
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            noValidate=""
            action=""
            className="ng-untouched ng-pristine ng-valid"
          >
            <div className="relative pb-2 mt-5">
              <label
                className="block w-full appearance-none text-left py-2 text-gray-700 mr-6"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: "Please enter your name." })}
                className="block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Name"
              />
              {errors.name && (
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
                    <span>{errors.name?.message}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="relative pb-2 mt-5">
              <label
                className="block w-full appearance-none text-left py-2 text-gray-700 mr-6"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "Please Enter a valid Email",
                })}
                className="block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Email"
              />
              {errors.email && (
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
                    <span>{errors.email?.message}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="relative py-2">
              <label
                className="block w-full appearance-none text-left py-2 text-gray-700 mr-6"
                htmlFor="email"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                {...register(
                  "password",

                  {
                    required: "Please Enter a strong password",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longers",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password doesn't exit 12 characters",
                    },
                  }
                )}
                className="block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Password"
              />
              {errors.password && (
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
                    <span>{errors.password?.message}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="text-left">
              <p>
                Already have an account?{" "}
                <Link className="text-green-400 font-bold" to="/logIn">
                  Log In
                </Link>
              </p>
            </div>
            <div className="relative">
              <button
                type="submit"
                className="block w-full appearance-none  bg-black border text-white border-gray-200  font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
