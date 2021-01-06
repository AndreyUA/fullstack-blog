import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import "./Comment.css";

import { connect } from "react-redux";
import { deleteComment } from "../../store/actions/posts";

const Comment = ({
  comment: { text, avatar, date, name, user, _id: commentId },
  user: { _id },
  deleteComment,
  postId,
}) => {
  const deletePostHandler = (e) => {
    e.preventDefault();
    deleteComment(postId, commentId);
  };
  return (
    <div className="Comment">
      <div className="Comment_author">
        <img className="Comment_avatar" src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <div className="Comment_content">
        <p className="Comment_text">{text}</p>
        <Moment
          className="PostItem_date Comment_date"
          format="DD MMMM, YYYY on HH:mm"
        >
          {date}
        </Moment>
      </div>
      {_id === user ? (
        <button
          onClick={(e) => deletePostHandler(e)}
          className="Comment_delete"
        >
          &#10006;
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { deleteComment })(Comment);
