// src/components/Sidebar.js
import React from "react";
import "./SideBar.css";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <a href="/">
        <img src={one} alt="one" className="one" />
      </a>
      <br />
      <br />
      <br />
      <a href="/">
        <img src={two} alt="two" className="two" />
      </a>
      <br />
      <a href="#">
        <img src={three} alt="three" className="three" />
      </a>
      <br />
      <br />
      <img src={four} alt="four" className="four" />
      <br />
      <br />
      <a href="#">
        <img src={five} alt="five" className="five" />
      </a>
      <br />
    </div>
  );
};

export default SideBar;
