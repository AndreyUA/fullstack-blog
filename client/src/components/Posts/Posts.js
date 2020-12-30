import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Posts.css";
import PostItem from "./PostsItem";

import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts";

const Posts = ({ posts: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts();
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
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
