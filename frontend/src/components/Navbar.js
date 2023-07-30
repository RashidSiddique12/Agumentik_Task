import React from "react";
import "./navBar.css";
import Body from "./Body";
import { Link } from "react-router-dom";
import lean from "../img/lean.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-list">
            <li className="nav-item">
              <span>
                <img
                  style={{ marginBottom: "-5px" }}
                  src={lean}
                  alt=""
                  width="25px"
                />{" "}
                &nbsp;
              </span>
              <Link to="/home">Lean</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-middle">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Impact</a>
            </li>
            <li className="nav-item">
              <a href="#">Education</a>
            </li>
            <li className="nav-item">
              <a href="#">Events Funding Opportunities</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
            <li className="nav-item signin">
              <Link to="/">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ margin: "0 30px 20px 30px" }}>
        <hr />
      </div>
      <Body />
    </>
  );
};

export default Navbar;
