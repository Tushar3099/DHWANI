import React from "react";
import { Headset } from "@material-ui/icons";

const Sidebar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebar-active");
  };

  const toggleProfile = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown-active");
  };

  return (
    <>
      <div className="navbar navbar-active">
        <div
          className="hamburger"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <div className="rect slideDown" />
          <div className="rect slideLeft" />
          <div className="rect slideUp" />
        </div>
        <div className="left item">
          <div className="brand">
            <div className="logo">
              <Headset style={{ height: "40px", width: "40px" }} />
            </div>
            <h5>Dhwani</h5>
          </div>
        </div>

        <div className="center item">
          {/* <input type="text" placeholder="Search..." /> */}
        </div>

        <div className="right item">
          <div className="profile" onClick={toggleProfile}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h5>Tushar</h5>
            <div className="dropdown">
              <li>Profile</li>
              <li>Logout</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
