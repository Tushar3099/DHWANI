import React from "react";
import { Link } from "react-router-dom";

const Playlist = () => {
  const playlist = [
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
      name: "Rocking NIghts",
      id: 11238465982
    },
    {
      img:
        "https://images.squarespace-cdn.com/content/v1/518c10f0e4b03bb726afb55b/1386192990293-3WOYETVWFC0GJMFWH4BU/ke17ZwdGBToddI8pDm48kEYCq63vK5QS_A9RzvEPj41Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIihyGJh09w428tOY5g-FioOhFDyb8wchSiZQN0Pk_Z2c/SP-Website-Music-Editing-Thumbnail.png?format=1000w",
      name: "Soothing Daylights",
      id: 11238823982
    }
  ];

  const renderPlaylist = playlist.map(playlist => {
    return (
      <>
        <Link to={`/playlist/${playlist.id}`}>
          <div className="item" key={playlist.id}>
            <img src={playlist.img} alt="img" />
            <div className="name">{playlist.name}</div>
          </div>
        </Link>
      </>
    );
  });

  return (
    <>
      <div className="heading">Playlist</div>
      <div className="playlist">{renderPlaylist}</div>
    </>
  );
};

export default Playlist;
