import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ShowDetailsPost = () => {
  const postInfo = useLoaderData();
  const { photo, details, name } = postInfo;
  const description = details.slice(0, 8);

  const [user, setUser] = useState(postInfo);

  const handlePostComment = (event) => {
    event.preventDefault();

    fetch(`https://linked-in-2-0-eight.vercel.app/posts/${postInfo._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <div className="p-5 mx-auto lg:w-1/2 sm:p-10 md:p-16 dark:bg-base-300 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={photo}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="px-20 py-5 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-slate-500">
            <div className="space-y-2">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {description}
              </Link>
              <p className="text-xs dark:text-gray-400">
                By
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs ml-1 hover:underline"
                >
                  {name}
                </Link>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>{details}</p>
            </div>
            <form
              onClick={handlePostComment}
              noValidate=""
              action=""
              className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
            >
              <input
                onChange={handleInputChange}
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
              />
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
              >
                Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsPost;
