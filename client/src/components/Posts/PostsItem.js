import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import "./PostItem.css";

import { connect } from "react-redux";
import { deletePost } from "../../store/actions/posts";
import PostItemStats from "./PostItemStats";

const PostsItem = ({
  post: { avatar, name, date, text, user, _id: postId, comments, likes },
  user: { _id },
  deletePost,
}) => {
  const deletePostHandler = (e) => {
    e.preventDefault();
    deletePost(postId);
  };
  return (
    <div className="PostsItem">
      <img className="PostsItem_pic" src={avatar} alt="avatar_pic" />
      <div className="PostItem_main">
        <div className="PostsItem_title">
          <p className="PostItem_name">{name}</p>
          <Moment className="PostItem_date" format="DD MMMM, YYYY on HH:MM">
            {date}
          </Moment>
          {_id === user ? (
            <button
              onClick={(e) => deletePostHandler(e)}
              className="PostItem_delete"
            >
              &#10006;
            </button>
          ) : null}
        </div>
        <div className="PostsItem_content">
          <p className="PostItem_text">{text}</p>
        </div>
        <PostItemStats postId={postId} comments={comments} likes={likes} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

PostsItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deletePost })(PostsItem);
