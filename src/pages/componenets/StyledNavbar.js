import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => {
          isActive ? "link active" : "link";
        }}
      >
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
    </div>
  );
}

export default Nav;
