import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        login
      </NavLink>
    </div>
  );
}

export default Nav;
