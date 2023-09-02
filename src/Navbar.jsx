import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="mx-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ">
              <NavLink className="navbar-brand" to="/">
                Techno-fy
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-NavLink active text-center"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-NavLink text-center"
                      to="/about"
                      activeClassName="menu_active"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-NavLink text-center"
                      to="/contact"
                      activeClassName="menu_active"
                    >
                      Contact US
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
