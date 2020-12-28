import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Registration.css";
import Input from "../UI/Input/Input";

const Registration = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [isValid, setIsValid] = useState(false);

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // надо добавить тут валидацию форм
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ name, email, password });

      console.log(body);

      const response = await axios.post("/api/register", body, config);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
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

          <Input
            disabled={isValid}
            className="Input_submit"
            type="submit"
            value="Registration"
          />
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {};

export default Registration;
