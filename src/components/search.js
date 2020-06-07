import React, { useState } from "react";
import "../stylesheet/search.css";
import { KeyboardArrowDown } from "@material-ui/icons";

const Search = () => {
  const typeClick = () => {
    const options = document.querySelector(".options");
    const svg = document.querySelector(".type svg");

    options.classList.toggle("active");
    svg.classList.toggle("active");
  };

  const data = [
    {
      name: "Jo bheji thi Dua",
      artist: "Arijit Singh"
    }
  ];

  const [type, setType] = useState("Song");

  return (
    <div className="search">
      <div className="searchBox">
        <input placeholder="Search..." type="text" />
        <div className="optionBox">
          <div className="type" onClick={() => typeClick()}>
            <h3>{type}</h3>
            <KeyboardArrowDown />
          </div>
          <div className="options">
            <li onClick={e => setType("Song")}>Song</li>
            <li onClick={e => setType("Artist")}>Artist</li>
            <li onClick={e => setType("Mood")}>Mood</li>
            <li onClick={e => setType("Genre")}>Genre</li>
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default Search;
