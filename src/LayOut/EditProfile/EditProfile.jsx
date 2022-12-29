import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const EditProfile = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bio = form.bio.value;
    console.log(firstName, lastName, email, phoneNumber, bio);

    //upload image in imgBB
    const image = form.image.files[0];
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
      .then((data) => {
        const photoUrl = data.data.display_url;
        console.log(photoUrl);

        const updateUser = {
          firstName,
          lastName,
          email,
          phoneNumber,
          bio,
          photoUrl,
        };
        console.log(updateUser);
        toast("Updated");
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateUser)
        })
        .then((res) => res.json())
        .then(data => console.log(data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleCancel 🙁)=>{
  //   process.form.rest()
  //   navigate('/profile');
  // }

  return (
    <div className=" mt-16 px-64 ">
      <div className=" p-10">
        <h1 className="text-3xl">Account</h1>
        <hr className="mt-2 h-[2px] bg-blue-400 mb-4" />

        
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className=" space-between">
                <div className="flex justify-center items-center">
                  <p className="text-xl  mb-5 text-bold">Profile Picture</p>
                  <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
                  <div className="space-y-2">
                    <div className="buttons flex">
                      <label
                        type="submit"
                        htmlFor="profileEdit"
                        className="ml-44  text-center block w-full appearance-none  bg-black border border-gray-200 text-white font-semibold  py-3 px-8  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                      >
                        Edit
                      </label>
                      <input
                        type="checkbox"
                        id="profileEdit"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box">
                          <div>
                            <label
                              htmlFor="image"
                              className="block mb-2 text-sm"
                            >
                              Select Image:
                            </label>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              accept="image/*"
                            />
                          </div>
                          <div className="flex w-full justify-between">
                            <div className="w-full ">
                              <label
                                htmlFor="Name"
                                className="block mb-2 text-sm"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                name="Name"
                                id="Name"
                                required
                                placeholder="Name"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm"
                            >
                              Email address
                            </label>
                            <input
                              required
                              type="email"
                              name="email"
                              value={user?.email}
                              id="email"
                              placeholder="Enter Your Email Here"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                              data-temp-mail-org="0"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <label htmlFor="phoneNumber" className="text-sm">
                                University Name
                              </label>
                            </div>
                            <input
                              type="text"
                              name="universityName"
                              id="universityName"
                              value={user?.universityName}
                              required
                              placeholder="Enter Your University Name"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <label htmlFor="bio" className="text-sm">
                                Address
                              </label>
                            </div>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              required
                              value={user?.address}
                              placeholder="Enter Your Address"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                            />
                          </div>
                          <div className="modal-action">
                            <label
                            type="submit"
                              htmlFor="profileEdit"
                              className="text-center block w-full appearance-none  bg-black border border-gray-200 text-white font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5"
                            >
                              Confirm
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
                <div className="flex justify-center items-center">
                  {user?.photoURL ? (
                    <img
                      className="w-24  text-left rounded-full"
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
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="w-full ">
                <label htmlFor="FirstName" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  disabled
                  required
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                readOnly
                value={user?.email}
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  University Name
                </label>
              </div>
              <input
                type="text"
                disabled
                name="universityName"
                id="universityName"
                value={user?.universityName}
                required
                placeholder="Enter Your University Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="bio" className="text-sm">
                  Address
                </label>
              </div>
              <input
                type="text"
                disabled
                name="address"
                id="address"
                required
                placeholder="Enter Your Address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          {/* <div className="space-y-2">
            <div className="buttons flex">
              <label
                type="submit"
                htmlFor="profileEdit"
                className="text-center block w-full appearance-none  bg-black border border-gray-200 text-white font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5"
              >
                Edit
              </label>
              <input
                type="checkbox"
                id="profileEdit"
                className="modal-toggle"
              />
              <div className="modal">
                <div className="modal-box">
                  <div>
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Select Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="w-full ">
                      <label htmlFor="Name" className="block mb-2 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        required
                        placeholder="Name"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={user?.email}
                      id="email"
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="phoneNumber" className="text-sm">
                        University Name
                      </label>
                    </div>
                    <input
                      type="text"
                      name="universityName"
                      id="universityName"
                      value={user?.universityName}
                      required
                      placeholder="Enter Your University Name"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="bio" className="text-sm">
                        Address
                      </label>
                    </div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      placeholder="Enter Your Address"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                    />
                  </div>
                  <div className="modal-action">
                    <label htmlFor="profileEdit" className="text-center block w-full appearance-none  bg-black border border-gray-200 text-white font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5">
                      Confirm
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        
      </div>
    </div>
  );
};

export default EditProfile;
