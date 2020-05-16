import React from "react";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/navbar.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}
