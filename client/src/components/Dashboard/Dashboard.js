import React from "react";
import PropTypes from "prop-types";

import "./Dashboard.css";

import { connect } from "react-redux";

const Dashboard = ({ user: { name, avatar, email } }) => {
  return (
    <div className="Dashboard">
      <h1>hello</h1>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
