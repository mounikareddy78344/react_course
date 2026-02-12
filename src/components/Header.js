import React from "react";
import { Link } from "react-router-dom";

function Header({ brand, theme, switchTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {brand}
        </Link>

        <div>
          <Link className="nav-link d-inline mx-2" to="/">
            Home
          </Link>
          <Link className="nav-link d-inline mx-2" to="/info">
            Info
          </Link>
          <Link className="nav-link d-inline mx-2" to="/reviews">
            Reviews
          </Link>
        </div>

        <div className="form-check form-switch text-light">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={switchTheme}
          />
          <label className="form-check-label">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
