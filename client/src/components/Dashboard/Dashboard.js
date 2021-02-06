import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Dashboard.css";
import Loader from "../UI/Loader/Loader";

import { connect } from "react-redux";
import { getProfile } from "../../store/actions/profile";
import ProfilePage from "./ProfilePage";

const Dashboard = ({
  user: { _id },
  getProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getProfile(_id);
  }, [_id, getProfile]);

  return (
    <div className="Dashboard">
      {loading ? <Loader /> : <ProfilePage profile={profile} />}
    </div>
  );
};

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Dashboard);
