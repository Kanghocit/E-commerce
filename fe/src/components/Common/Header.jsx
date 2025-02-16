import React from "react";
import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      {/* Topbar */}
      <TopBar />
      {/* Navbar */}
      <Navbar/>
      {/* Cart */}
    </header>
  );
};

export default Header;
