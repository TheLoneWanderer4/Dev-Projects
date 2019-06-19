import React, { Component } from "react";

const NavBar = ({ counterCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      Products in your cart
      <span className="badge badge-pill badge-secondary">{counterCount}</span>
    </nav>
  );
};

export default NavBar;
