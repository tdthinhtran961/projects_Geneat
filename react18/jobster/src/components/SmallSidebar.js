import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";


import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.user);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      {isSidebarOpen && (
        <div
          className={
            isSidebarOpen
              ? "sidebar-container show-sidebar"
              : "sidebar-container"
          }
        >
          <div className="content">
            <button className="close-btn" onClick={handleToggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo></Logo>
            </header>
            <NavLinks handleToggleSidebar={handleToggleSidebar}></NavLinks>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SmallSidebar;
