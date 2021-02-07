import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "../UI/Input/Input";
import "./CorrectProfile.css";

import { connect } from "react-redux";
import { updateProfile } from "../../store/actions/profile";

const CorrectProfile = ({ profile, user: { _id }, updateProfile }) => {
  const [formData, setFormData] = useState({
    name: profile.name || null,
    country: profile.country,
    city: profile.city,
    birthday: `${new Date(profile.birthday).getFullYear()}-${
      new Date(profile.birthday).getMonth() + 1 < 10
        ? `0${new Date(profile.birthday).getMonth() + 1}`
        : new Date(profile.birthday).getMonth() + 1
    }-${new Date(profile.birthday).getDate()}`,
    status: profile.status,
  });

  const { name, country, city, birthday, status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: { text: e.target.value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateProfile(_id, formData);
  };
  return (
    <div className="CorrectProfile">
      <div className="CorrectProfile_window">
        <h2>Edit your profile</h2>
        <form className="CorrectProfile_form" onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="your-name"
            labelTxt="Enter your new name"
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
            placeholder="Your name"
            value={name}
          />
          <Input
            label="your-country"
            labelTxt="Enter your country"
            type="text"
            name="country"
            onChange={handleChange}
            placeholder="Your country"
            value={country}
          />
          <Input
            label="your-city"
            labelTxt="Enter your city"
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Your city"
            value={city}
          />
          <Input
            label="your-birthday"
            labelTxt="Enter your birthday"
            type="date"
            name="birthday"
            onChange={handleChange}
            placeholder="Your birthday"
            value={birthday}
          />
          <Input
            label="your-status"
            labelTxt="Enter your status"
            type="text"
            name="status"
            onChange={handleStatusChange}
            placeholder="Your status"
            value={status.text}
          />

          <Input className="ProfilePage_btn ProfilePage_btn-chg" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  user: state.auth.user,
});

CorrectProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { updateProfile })(CorrectProfile);
