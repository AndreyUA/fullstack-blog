import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./Login.css";
import Input from "../UI/Input/Input";

import { connect } from "react-redux";
import { login } from "../../store/actions/auth";

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuth) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="Login">
      <div className="Login_window">
        <h2>Login</h2>
        <form className="Registration_form" onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="email"
            labelTxt="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            required={true}
            placeholder="Your email"
            value={email}
          />
          <Input
            label="password"
            labelTxt="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
            required={true}
            value={password}
          />

          <p>Fill in all the fields!</p>

          <Input className="Input_submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

Login.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login })(Login);
