import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Post.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Loader from "../UI/Loader/Loader";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";

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
          <div className="Post_wrapper">
            <div className="Post_back">
              <Link className="PostItemStats_link link_comments" to="/posts">
                <span className="PostItemStats_txt">Back to posts</span>
              </Link>
            </div>
            <div className="Post_body">
              <div className="Post_head">
                <img className="Post_avatar" src={post.avatar} alt="avatar" />
                {post.user === _id ? (
                  <h4 className="Post_name">It's your post.</h4>
                ) : (
                  <h4 className="Post_name">{`Posted by ${post.name}`}</h4>
                )}
              </div>
              <div className="Post_content">
                <p>{post.text}</p>
                <Moment
                  className="PostItem_date Post_date"
                  format="DD MMMM, YYYY on HH:mm"
                >
                  {post.date}
                </Moment>
              </div>
            </div>
            <div className="Post_form">
              <AddCommentForm postId={match.params.id} />
            </div>
          </div>

          <div className="Post_comment">
            {post.comments.map((comment) => (
              <div key={comment._id}>
                <Comment comment={comment} postId={match.params.id} />
              </div>
            ))}
          </div>
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
