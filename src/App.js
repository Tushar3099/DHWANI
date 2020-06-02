import React, { Component } from "react";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/navbar.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

class App extends Component {
  render(){
    return (
      <>
        <Navbar />
        <Sidebar />
      </>
    );
  }
}

export default App;