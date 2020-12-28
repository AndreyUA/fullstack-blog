import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import blog from "../../img/blog.svg";

const Nabar = () => {
  return (
    <nav>
      <NavLink
        className="Nav_logo"
        exact
        activeClassName="Nav_logo_active"
        to="/"
      >
        <img className="Nav_pic" src={blog} alt="logo link" />
      </NavLink>
      <ul className="Nav_navigation">
        <li>
          <NavLink to="/registration">registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nabar;
