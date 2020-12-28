import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Registration.css";
import Input from "../UI/Input/Input";

const Registration = (props) => {
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

    console.log(formData);
  };
  return (
    <div className="Registration">
      <div className="Registration_window">
        <h2>Registration</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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

          <p>Fill in all the fields.</p>

          <Input className="Input_submit" type="submit" value="Registration" />
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {};

export default Registration;
