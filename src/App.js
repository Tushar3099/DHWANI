import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/playlistpage.css";
import "./stylesheet/navbar.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlaylistPage from "./components/PlaylistPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Navbar} />

        <div className="section">
          <Route path="/" component={Sidebar} />

          <div className="midSection">
            <Switch>
              <Route path="/playlist/:id" component={PlaylistPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
