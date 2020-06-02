import React, { useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import Playlist from "./Playlist";

const Sidebar = () => {
  useEffect(() => {
    const lightbox = document.querySelector(".lightbox");
    lightbox.addEventListener("click", e => {
      if (e.target !== e.currentTarget) return;

      lightbox.classList.remove("active");
    });
  });

  const clickPlaylist = e => {
    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.add("active");
  };

  return (
    <>
      <div className="lightbox">
        <div className="form">
          <input type="text" placeholder="Playlist Name..." />
          <button>Add</button>
        </div>
      </div>
      <div className="sidebar">
        <div className="head" />
        <div className="content">
          <Playlist />
        </div>
        <div className="foot">
          <div className="add" onClick={clickPlaylist}>
            <h3>Add Playlist</h3>
            <Icon style={{ fontSize: 50, color: "white" }}>add_circle</Icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
