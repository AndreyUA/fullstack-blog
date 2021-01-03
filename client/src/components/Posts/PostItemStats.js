import React from "react";
import PropTypes from "prop-types";

import "./PostItemStats.css";
import "../UI/Input/Input";
import like from "../../img/like.svg";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addLike } from "../../store/actions/posts";

const PostItemStats = ({ postId, comments, likes, addLike }) => {
  return (
    <div className="PostItemStats">
      <button
        onClick={(e) => {
          e.preventDefault();
          addLike(postId);
        }}
        className="PostItemStats_likes add_like_btn"
        type="button"
      >
        <img className="PostItemStats_pic" src={`${like}`} alt="" />
        <span>{`${likes.length}`}</span>
        <span className="PostItemStats_txt">Add like</span>
      </button>
      <button className="PostItemStats_likes remove_like_btn" type="button">
        <img className="PostItemStats_pic remove_like" src={`${like}`} alt="" />
        <span className="PostItemStats_txt">Remove like</span>
      </button>
      <Link
        className="PostItemStats_link link_comments"
        to={`/posts/${postId}`}
      >
        <span className="PostItemStats_txt">{`Comments: ${comments.length}`}</span>
      </Link>
    </div>
  );
};

PostItemStats.propTypes = { postId: PropTypes.string.isRequired };

export default connect(null, { addLike })(PostItemStats);
