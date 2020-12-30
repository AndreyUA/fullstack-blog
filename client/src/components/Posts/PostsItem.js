import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import "./PostItem.css";

const PostsItem = ({ post: { avatar, name, date, text } }) => {
  return (
    <div className="PostsItem">
      <img className="PostsItem_pic" src={avatar} alt="avatar_pic" />
      <div className="PostItem_main">
        <div className="PostsItem_title">
          <p className="PostItem_name">{name}</p>
          <Moment className="PostItem_date" format="DD MMMM, YYYY on HH:MM">
            {date}
          </Moment>
        </div>
        <div className="PostsItem_content">
          <p className="PostItem_text">{text}</p>
        </div>
      </div>
    </div>
  );
};

PostsItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostsItem;
