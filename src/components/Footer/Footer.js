import React from "react";
import "./Footer.css";
import logo from "../THE.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-comp">
      <div className="company-info-comp">
        <div className="company-logo-comp">
          <Link to="/">
            <img src={logo} alt="Not Found ;(" />
          </Link>
          <div className="footer-nav-logo">
            <Link to="/">
              <span className="footer-logo-rot">The</span>
              <span className="footer-logo2"> Siren</span>
            </Link>
          </div>
        </div>
        <div className="company-desc">
          The Siren is India's leading blog Webapp providing latest and hot news
          straight to your devices.
        </div>
      </div>
    </div>
  );
}

export default Footer;
