import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./Registration.css";
import Input from "../UI/Input/Input";

import { connect } from "react-redux";
import { registration } from "../../store/actions/auth";
import { setAlert } from "../../store/actions/alert";

const Registration = ({ isAuth, registration, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not mutch!", "danger");
    } else {
      registration(formData);
    }
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Registration">
      <div className="Registration_window">
        <h2>Registration</h2>
        <form className="Registration_form" onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="your-name"
            labelTxt="Enter your name"
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
            placeholder="Your name"
            value={name}
          />
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
          <Input
            label="password2"
            labelTxt="Confirm your password"
            type="password"
            name="password2"
            onChange={handleChange}
            required={true}
            value={password2}
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

Registration.propTypes = {
  isAuth: PropTypes.bool,
  registration: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { registration, setAlert })(
  Registration
);
