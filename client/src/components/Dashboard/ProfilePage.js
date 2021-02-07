import React, { useState } from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import moment from "moment";
import "./ProfilePage.css";
import Input from "../UI/Input/Input";
import Loader from "../UI/Loader/Loader";
import CorrectProfile from "./CorrectProfile";

const ProfilePage = ({
  profile: { name, email, avatar, status, birthday, country, city },
}) => {
  const [correct, setCorrect] = useState(false);

  const statusDate = moment(status.date).fromNow();

  const correctHandler = (e) => {
    e.preventDefault();
    setCorrect(!correct);
  };

  return (
    <>
      <div className="ProfilePage">
        <div className="ProfilePage_column">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="ProfilePage_column">
          <div className="ProfilePage_column_part">
            <h1>{name}</h1>
            {status.text ? (
              <>
                <h4>{status.text}</h4>
                <span>Updated {statusDate}</span>
              </>
            ) : (
              <p>Change your status</p>
            )}
          </div>
          <h5>Email: {email}</h5>
          <h5>
            Birthday: <Moment format="DD MMMM, YYYY">{birthday}</Moment>{" "}
          </h5>
          <h5>Adress: {`${country}, ${city}`}</h5>
        </div>
        <div className="ProfilePage_column ProfilePage_column_control">
          <Input
            onClick={(e) => correctHandler(e)}
            type="button"
            addClassName="ProfilePage_column_btn"
            className="ProfilePage_btn"
            value={"Edit your profile"}
          />
        </div>
      </div>
      {correct && <CorrectProfile />}
    </>
  );
};

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilePage;
