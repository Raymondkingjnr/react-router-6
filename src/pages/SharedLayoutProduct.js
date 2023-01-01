import React from "react";
import { Outlet } from "react-router-dom";

function SharedLayoutProduct() {
  return (
    <>
      <h1>Products</h1>
      <Outlet />
    </>
  );
}

export default SharedLayoutProduct;
