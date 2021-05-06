import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Posts.css";
import PostItem from "./PostsItem";
import AddPostForm from "./AddPostForm";

import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts";
import Loader from "../UI/Loader/Loader";

const Posts = ({ posts: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts(1);
  }, [getPosts]);

  return (
    <div className="Posts">
      <AddPostForm />
      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <PostItem post={post} />
          </div>
        ))
      )}
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
