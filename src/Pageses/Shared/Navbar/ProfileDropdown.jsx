import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";


import "./ProfileDropdown.css"

const ProfileDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logout successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="sub-menu-wrap">
      <div className="sub-menu">
        <div className="bg-gray-400 rounded-xl ">
        <div className="user-info pt-2">
          {user?.uid?

            <img
            src={user?.photoURL}
            alt=""
          />
          :
          <img
            src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"            
            alt=""
          />
        
        
        }
        </div>
        <div>

          <p className="user-info mt-1 text-black">{user?.displayName}</p>
          <p className="text-center pb-2 font-sm text-black">{user?.email}</p>
        </div>

        </div>
        <hr />

        <h1 className="sub-menu-link">
          <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />
          <Link to="/profile"><p>Profile</p></Link>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </h1>

        <h1 className="sub-menu-link">
          <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
          <p>Settings & Privacy</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </h1>
        <h1 className="sub-menu-link">
          <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
          <p>Helps & Support</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </h1>
        <h1 onClick={handleLogout} className="sub-menu-link">
          <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
          <p>Logout</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ProfileDropdown;