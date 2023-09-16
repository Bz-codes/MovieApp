// src/components/Footer.js

import React from "react";
import fb from "./fb.png";
import tw from "./tw.png";
import ins from "./ins.png";
import ut from "./ut.png";
import "./Footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icons">
        <li>
          <a href="#" className="social-ico">
            <img src={fb} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#" className="social-ico">
            <img src={ins} alt="instagram" />
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className="social-ico">
            <img src={tw} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#" className="social-ico">
            <img src={ut} alt="youtube" />
          </a>
        </li>
      </ul>

      <div>
        <h4>
          Conditions of Use{""}
          <span style={{ padding: "1em" }}> Privacy & Policy </span> Press Room
        </h4>
      </div>
      <p>&copy; 2023 MovieBox by Marvelous Obiji. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
