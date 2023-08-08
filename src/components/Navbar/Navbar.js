import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-Container">
      <div className="nav-logo">
        <Link to="/">
          <span className="logo-rot">The</span>
          <span className="logo2"> Siren</span>
        </Link>
      </div>
      <div className="navi">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bollywood">Bollywood</NavLink>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/hollywood">Hollywood</NavLink>
        <NavLink to="/fitness">Fitness</NavLink>
        <NavLink to="/food">Food</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
