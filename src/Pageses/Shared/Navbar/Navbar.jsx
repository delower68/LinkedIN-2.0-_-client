import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
    const navbar = (
        <React.Fragment>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='media'>Media</Link>
          </li>
          <li>
            <Link>Message</Link>
          </li>
          <li>
            <Link to='profile'>About</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </React.Fragment>
      );
  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >{navbar}
          </ul>
        </div>
        <img
          className="w-[30px] mr-2"
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-100"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  dark:text-gray-100 dark:bg-gray-900"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
      {user?.uid ? (
            <div className="relative">
              <div onClick={() => setOpen(!open)} >
                {user?.photoURL ? (
                  <img
                    className="w-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-12 rounded-full"
                    src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                    alt=""
                  />
                )}
              </div>
              {open && <ProfileDropdown />}
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-warning">
              LOGIN
            </Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
