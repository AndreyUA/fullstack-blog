import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./Posts.css";
import PostItem from "./PostsItem";

import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts";

const Posts = ({ posts: { posts }, getPosts, isAuth }) => {
  useEffect(() => {
    getPosts();
    console.log("fetch");
  }, [getPosts]);

  return (
    <div className="Posts">
      {posts.map((post) => (
        <div key={post._id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getPosts })(Posts);
