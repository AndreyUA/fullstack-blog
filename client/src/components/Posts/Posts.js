import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Posts.css";
import PostItem from "./PostsItem";
import AddPostForm from "./AddPostForm";
import Pagination from "../Pagination";

import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts";
import Loader from "../UI/Loader/Loader";

const Posts = ({ posts: allPosts, getPosts }) => {
  const { posts, length } = allPosts;

  const [pageNumber, setPageNumber] = useState(0);
  const changePageNumberHandler = (num) => {
    if (num <= 0) {
      setPageNumber(0);
    } else if (num >= length - 1) {
      setPageNumber(length - 1);
    } else {
      setPageNumber(num);
    }
  };

  useEffect(() => {
    getPosts(pageNumber);
  }, [getPosts, pageNumber]);

  return (
    <>
      <div className="Posts">
        <AddPostForm />
        {posts.length === 0 ? (
          <Loader />
        ) : (
          posts.slice(0, 3).map((post) => (
            <div key={post._id}>
              <PostItem post={post} />
            </div>
          ))
        )}
      </div>
      {posts.length && (
        <Pagination
          quantity={length}
          navPostsHandler={changePageNumberHandler}
          actualNumber={pageNumber}
        />
      )}
    </>
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
