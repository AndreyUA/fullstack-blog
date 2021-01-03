import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getPost } from "../../store/actions/posts";

const Post = ({ posts: { post, loading }, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match]);
  return <div>post</div>;
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getPost })(Post);
