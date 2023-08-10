import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [data, setData] = useState(true);
  console.log(data);
  return (
    <div className="nav-Container">
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-rot">The</span>
            <span className="logo2"> Siren</span>
          </Link>
          <div className="nav-dropdown">
            <button className="dropdown-btn" onClick={() => setData(!data)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="navi" style={{ display: data ? "flex" : "none" }}>
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
