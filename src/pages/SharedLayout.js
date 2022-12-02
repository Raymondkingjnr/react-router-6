import React from "react";
import { Link, Outlet } from "react-router-dom";
import StyledNavbar from "../pages/componenets/StyledNavbar";
function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
