import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/playlistpage.css";
import "./stylesheet/songpage.css";
import "./stylesheet/navbar.css";
import "./stylesheet/profilepage.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlaylistPage from "./components/PlaylistPage";
import SongPage from "./components/SongPage";
import ProfilePage from "./components/ProfilePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Navbar} />

        <div className="section">
          <Route path="/" component={Sidebar} />

          <div className="midSection">
            <Switch>
              <Route path="/playlist/:id" component={SongPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
