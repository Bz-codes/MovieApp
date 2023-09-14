// src/components/Banner.js

import React from "react";
import "./Banner.css"; // Import your CSS file for styling
import Logo from "./Logo.png"; // Import yourLogo image
// import Icon from "./Icon.png";
import Menu from "./Menu.png";
import Button from "./Button.png";
import IMDB1 from "./IMDB1.png";
import Toma1 from "./Toma1.png";
import Search from "./Search";

function Banner() {
  return (
    <div className="banner">
      {/* Fixed Navigation Bar */}
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

      {/* Background Image */}
      <div className="banner-image"></div>

      <div className="banner-content">
        <h1>
          John Wick 3 :<br />
          Parabellum
        </h1>
        <ul className="imm">
          <li>
            <img src={IMDB1} alt="IMDB" className="menulogo" />
          </li>
          <li>
            <img src={Toma1} alt="Toma" className="menulogo" />
          </li>
        </ul>
        <p>
          John Wick is on the run after killing a member of the internatuonal
          assassins guild, nd with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <img src={Button} alt="Button" className="button" />

        {/* Other content of your banner */}
      </div>
    </div>
  );
}

export default Banner;
