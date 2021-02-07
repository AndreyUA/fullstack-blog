import React, { useState } from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./PostItem.css";

import { connect } from "react-redux";
import { deletePost } from "../../store/actions/posts";
import PostItemStats from "./PostItemStats";

const PostsItem = ({
  post: { avatar, name, date, text, user, _id: postId, comments, likes },
  user: { _id },
  deletePost,
}) => {
  const [fullPost, setFullPost] = useState(false);

  const fullPostChangeHandler = (e) => {
    e.preventDefault();
    setFullPost(!fullPost);
  };

  const deletePostHandler = (e) => {
    e.preventDefault();
    deletePost(postId);
  };

  return (
    <div className="PostsItem">
      <img className="PostsItem_pic" src={avatar} alt="avatar_pic" />
      <div className="PostItem_main">
        <div className="PostsItem_title">
          {_id === user ? <Link className="PostItem_name" to="/dashboard">{name} (your page)</Link> : 
          <Link className="PostItem_name" to={`/dashboard/${user}`}>{name}</Link>}
          
          <Moment className="PostItem_date" format="DD MMMM, YYYY on HH:mm">
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
          {text.split(" ").length > 30 ? (
            fullPost ? (
              <p className="PostItem_text">
                {text}{" "}
                <button
                  className="PostItem_btn PostItem_btn_less"
                  onClick={(e) => fullPostChangeHandler(e)}
                >
                  read less
                </button>
              </p>
            ) : (
              <p className="PostItem_text">
                {text.split(" ").slice(0, 29).join(" ")}...
                <button
                  className="PostItem_btn PostItem_btn_more"
                  onClick={(e) => fullPostChangeHandler(e)}
                >
                  read more
                </button>
              </p>
            )
          ) : (
            <p className="PostItem_text">{text}</p>
          )}
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
