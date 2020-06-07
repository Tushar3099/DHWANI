import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/playlistpage.css";
import "./stylesheet/songpage.css";
import "./stylesheet/navbar.css";
import "./stylesheet/profilepage.css";
import "./stylesheet/search.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlaylistPage from "./components/PlaylistPage";
import SongPage from "./components/SongPage";
import ProfilePage from "./components/ProfilePage";
import Search from "./components/search";

import { UserProvider } from "./userContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Route path="/" component={Navbar} />

        <div className="section">
          <Route path="/" component={Sidebar} />

          <div className="midSection">
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/playlist/:id" component={PlaylistPage} />
              <Route path="/profile/:id" component={ProfilePage} />
              <Route path="/song/:id" component={SongPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
