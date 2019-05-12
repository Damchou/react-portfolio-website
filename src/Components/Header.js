import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
