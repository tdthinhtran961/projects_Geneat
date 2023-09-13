import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import {  FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { toggleSidebar, logoutUser, clearStore } from "../features/user/userSlice";


const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleToggleLogoutDropdown = () => {
    setShowLogout(!showLogout);
  };
  const handleLogoutUser = () => {
    // console.log("logout user");
    // dispatch(logoutUser("Logging out ..."));
    dispatch(clearStore("Logout Successful"))
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          <Logo></Logo>
          <h3 className="logo-text">dashboard</h3>
        </div>
        {user && <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={handleToggleLogoutDropdown}
          >
            <FaUserCircle></FaUserCircle>
            {user?.name}
            <FaCaretDown></FaCaretDown>
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={handleLogoutUser}
            >
              logout
            </button>
          </div>
        </div>}
      </div>
    </Wrapper>
  );
};

export default Navbar;
