import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-Container">
      <div className="nav-logo">
      <Link to="/"><span className="logo-rot">The</span><span className="logo2"> Siren</span></Link>
      </div>
      <div className="navi">
        <Link to="/">Home</Link>
        <Link to="/bollywood">Bollywood</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/hollywood">Hollywood</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/food">Food</Link>
      </div>
    </div>
  );
}

export default Navbar;
