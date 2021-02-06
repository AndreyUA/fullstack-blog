import React from "react";
import PropTypes from "prop-types";

import "./ProfilePage.css";

const ProfilePage = ({ profile: { name, email, avatar, status } }) => {
  return (
    <div className="ProfilePage">
      <div className="ProfilePage_column">
        <img src={avatar} alt="avatar" />
        <h2>{name}</h2>
        {status.text ? <p>{status.text}</p> : <p>Change your status</p>}
      </div>
      <div className="ProfilePage_column">
        <h5>Email: {email}</h5>
        <h5>Birthday: {email}</h5>
        <h5>Adress: {email}</h5>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilePage;
