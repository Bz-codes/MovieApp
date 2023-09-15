import React from "react";
import "./Banner.css";
import Logo from "./Logo.png";
import Menu from "./Menu.png";
import Search from "./Search";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <a href="#">
          <img src={Logo} alt="Logo" className="bannerLogo" />
        </a>
        <h2 className="navbar-text">Your Brand</h2>
      </div>

      <Search />

      {/* Add an appropriate search icon class */}

      <div className="menuLogo">
        <a href="#">
          <img src={Menu} alt="Menu" className="menulogo" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
