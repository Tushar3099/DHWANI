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

const App = () => {
  const user = {
    image:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
    email: "rdj@gmail.com",
    username: "Robert Downie Jr.",
    bio: "You know who I am"
  };

  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />

      <div className="section">
        <Route path="/" component={Sidebar} />

        <div className="midSection">
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/playlist/:id" component={PlaylistPage} />
            <Route
              path="/profile/:id"
              render={props => <ProfilePage {...props} user={user} />}
            />
            <Route path="/song/:id" component={SongPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
