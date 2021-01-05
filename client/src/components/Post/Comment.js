import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import "./Comment.css";

import { connect } from "react-redux";

const Comment = ({
  comment: { text, avatar, date, name, user },
  user: { _id },
}) => {
  const deletePostHandler = (e) => {
    e.preventDefault();
    console.log("delete");
  };
  return (
    <div className="Comment">
      <div className="Comment_author">
        <img className="Comment_avatar" src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <div className="Comment_content">
        <p className="Comment_text">{text}</p>
        <Moment
          className="PostItem_date Comment_date"
          format="DD MMMM, YYYY on HH:mm"
        >
          {date}
        </Moment>
      </div>
      {_id === user ? (
        <button
          onClick={(e) => deletePostHandler(e)}
          className="Comment_delete"
        >
          &#10006;
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

Comment.propTypes = { comment: PropTypes.object.isRequired };

export default connect(mapStateToProps)(Comment);
