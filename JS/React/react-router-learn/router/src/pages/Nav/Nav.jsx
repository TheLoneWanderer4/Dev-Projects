import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <Link className="navbar-brand" to="/">
        Logo
      </Link>
      <ul className="navbar-nav">
        <Link className="nav-item" to="/about">
          <li className="nav-link">About</li>
        </Link>
        <Link className="nav-item" to="/shop">
          <li className="nav-link">Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
