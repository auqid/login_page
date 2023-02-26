import React from "react";
import "./navbar.css";
import logo from "./image.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <nav>
          <img src={logo} alt="logo" />
          <a href="/#">Solutions</a>
          <a href="/#aboutus">About Us</a>
          <a href="/#resources">Resources</a>
          <a href="/#contact">Contact</a>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
