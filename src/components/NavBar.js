import React from "react";
import logo from "../Lm7mLogo.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <a className="navbar-brand nav-link p-2" href="/#">
          <img className="App-logo" src={logo} alt="logo..." />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-button" href="#about" >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-button" href="#knowledge">
                Knowledge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-button" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-button" href="#contact">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};
