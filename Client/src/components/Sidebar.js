import React, { useEffect, useState } from "react";
import Icon from "@material-ui/core/Icon";
import Playlist from "./Playlist";

const clickPlaylist = e => {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.add("active");
};
const clickLightbox = e => {
  const lightbox = document.querySelector(".lightbox");

  if (e.target !== e.currentTarget) return;

  lightbox.classList.remove("active");
};

const Sidebar = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    setPlaylist([
      {
        img:
          "https://images.squarespace-cdn.com/content/v1/518c10f0e4b03bb726afb55b/1386192990293-3WOYETVWFC0GJMFWH4BU/ke17ZwdGBToddI8pDm48kEYCq63vK5QS_A9RzvEPj41Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIihyGJh09w428tOY5g-FioOhFDyb8wchSiZQN0Pk_Z2c/SP-Website-Music-Editing-Thumbnail.png?format=1000w",
        name: "Sad Sufi",
        id: 11238872784
      },
      {
        img:
          "https://images.squarespace-cdn.com/content/v1/518c10f0e4b03bb726afb55b/1386192990293-3WOYETVWFC0GJMFWH4BU/ke17ZwdGBToddI8pDm48kEYCq63vK5QS_A9RzvEPj41Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIihyGJh09w428tOY5g-FioOhFDyb8wchSiZQN0Pk_Z2c/SP-Website-Music-Editing-Thumbnail.png?format=1000w",
        name: "Happy Birthday",
        id: 11238888498
      },
      {
        img:
          "https://images.squarespace-cdn.com/content/v1/518c10f0e4b03bb726afb55b/1386192990293-3WOYETVWFC0GJMFWH4BU/ke17ZwdGBToddI8pDm48kEYCq63vK5QS_A9RzvEPj41Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIihyGJh09w428tOY5g-FioOhFDyb8wchSiZQN0Pk_Z2c/SP-Website-Music-Editing-Thumbnail.png?format=1000w",
        name: "Happy Birthday",
        id: 11238888498
      },
      {
        img:
          "https://images.squarespace-cdn.com/content/v1/518c10f0e4b03bb726afb55b/1386192990293-3WOYETVWFC0GJMFWH4BU/ke17ZwdGBToddI8pDm48kEYCq63vK5QS_A9RzvEPj41Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIihyGJh09w428tOY5g-FioOhFDyb8wchSiZQN0Pk_Z2c/SP-Website-Music-Editing-Thumbnail.png?format=1000w",
        name: "Happy Birthday",
        id: 11238888498
      }
    ]);
  }, []);

  const addPlaylist = () => {
    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("active");
  };

  return (
    <>
      <div className="lightbox" onClick={clickLightbox}>
        <div className="form">
          <input
            type="text"
            value={playlistName}
            onChange={e => setPlaylistName(e.target.value)}
            placeholder="Playlist Name..."
          />
          <button onClick={addPlaylist}>Add</button>
        </div>
      </div>
      <div className="sidebar">
        <div className="head" />
        <div className="content">
          <Playlist playlist={playlist} />
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
