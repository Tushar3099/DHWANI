import React, { Component } from "react";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/playlistpage.css";
import "./stylesheet/navbar.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlaylistPage from "./components/PlaylistPage";


class App extends Component {
  render(){
    return (
      <>
        <Navbar />
        <Sidebar />
        <PlaylistPage />
      </>
    );
  }
}

export default App;