import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar">
        <a className="navbarName" href="/">
          Project Name
        </a>
        <div className="Wrap3">
          <Link to={"/books/"} className="LinkButton">Home Page</Link>
        </div>
        <div className="Wrap2">
          <Link to={"/archives/"} className="LinkButton">View Archives</Link>
        </div>
        <div className="Wrap1">
          <Link to={"/"} className="LinkButton">Log Out</Link>
        </div>
  </nav>
);

export default Nav;
