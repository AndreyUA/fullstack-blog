import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import blog from "../../img/blog.svg";
import logout_pic from "../../img/logout.svg";

import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

const Nabar = ({ isAuth, loading, logout }) => {
  const authLinks = (
    <>
      <li>
        <NavLink to="/posts">
          <span>posts</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">
          <span>dashboard</span>
        </NavLink>
      </li>
      <li>
        <a onClick={logout} href="/">
          <img className="Nav_logout" src={logout_pic} alt="logout" />
          <span>logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <NavLink to="/registration">
          <span>registration</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <span>login</span>
        </NavLink>
      </li>
    </>
  );

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
        {!!isAuth && !loading ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
});

Nabar.propTypes = {
  isAuth: PropTypes.bool,
  loading: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Nabar);
