import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "../UI/Loader/Loader";
import Moment from "react-moment";
import moment from "moment";
import "./UserPage.css";

import { connect } from "react-redux";
import { clearProfile, getProfile } from "../../store/actions/profile";

const UserPage = ({
  match,
  profile: { profile, loading },
  clearProfile,
  getProfile,
}) => {
  const id = match.params.id;

  useEffect(() => {
    clearProfile();
    getProfile(id);
  }, [clearProfile, getProfile, id]);

  return (
    <div className="UserPage">
      {loading ? (
        <Loader />
      ) : (
        <div className="ProfilePage">
          <div className="ProfilePage_column">
            <img src={profile.avatar} alt="avatar" />
          </div>
          <div className="ProfilePage_column">
            <div className="ProfilePage_column_part">
              <h1>{profile.name}</h1>
              {profile.status && profile.status.text ? (
                <>
                  <h4>{profile.status.text}</h4>
                  <span>Updated {moment(profile.status.date).fromNow()}</span>
                </>
              ) : (
                <p>Change your status</p>
              )}
            </div>
            <h5>Email: {profile.email}</h5>
            <h5>
              Birthday:{" "}
              <Moment format="DD MMMM, YYYY">{profile.birthday}</Moment>{" "}
            </h5>
            <h5>Adress: {`${profile.country}, ${profile.city}`}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

UserPage.propTypes = {
  profile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  clearProfile: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { clearProfile, getProfile })(UserPage);
