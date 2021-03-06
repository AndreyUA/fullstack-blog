import React from "react";
import PropTypes from "prop-types";

import "./PostItemStats.css";
import "../UI/Input/Input";
import like from "../../img/like.svg";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addLike, removeLike } from "../../store/actions/posts";

const PostItemStats = ({ postId, comments, likes, addLike, removeLike }) => {
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
        <img className="PostItemStats_pic" src={`${like}`} alt="like" />
        <span>{`${likes.length}`}</span>
        <span className="PostItemStats_txt">Like</span>
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeLike(postId);
        }}
        className="PostItemStats_likes remove_like_btn"
        type="button"
      >
        <img
          className="PostItemStats_pic remove_like"
          src={`${like}`}
          alt="unlike"
        />
        <span className="PostItemStats_txt">Unlike</span>
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

PostItemStats.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  likes: PropTypes.array.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

export default connect(null, { addLike, removeLike })(PostItemStats);
