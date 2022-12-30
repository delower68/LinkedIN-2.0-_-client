import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditProfileInfo = () => {
    const savedUserInfo = useLoaderData();
    console.log(savedUserInfo)
    return (
        <div>
             <form
          
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
                  <div className="space-y-2">
                    <div className="buttons flex">
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
                            //   value={user?.email}
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
                            //   value={user?.universityName}
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
                            //   value={user?.address}
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
    );
};

export default EditProfileInfo;