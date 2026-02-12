import React from "react";
import logo from "./logo.svg";

function Navbar() {
  return (
    <nav className="navbar px-3">
      <span className="navbar-brand d-flex align-items-center gap-2">
        <img src={logo} alt="logo" width="34" />
        My Text Area
      </span>
    </nav>
  );
}

export default Navbar;
