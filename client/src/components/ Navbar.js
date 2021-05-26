import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

           

            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
