import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import "./Comment.css";

const Comment = ({ comment: { text, avatar, date, name } }) => {
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
    </div>
  );
};

Comment.propTypes = { comment: PropTypes.object.isRequired };

export default Comment;
