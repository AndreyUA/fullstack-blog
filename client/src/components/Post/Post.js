import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Post.css";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader/Loader";

import { connect } from "react-redux";
import { getPost } from "../../store/actions/posts";

const Post = ({ posts: { post }, getPost, match, user: { _id } }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match]);
  return (
    <>
      {post ? (
        <div className="Post">
          <div className="Post_back">
            <Link className="PostItemStats_link link_comments" to="/posts">
              <span className="PostItemStats_txt">Back to posts</span>
            </Link>
          </div>

          <img className="Post_avatar" src={post.avatar} alt="avatar" />
          {post.user === _id ? (
            <h4 className="Post_name">Your post</h4>
          ) : (
            <h4 className="Post_name">{`Post by ${post.name}`}</h4>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  user: state.auth.user,
});

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getPost })(Post);
