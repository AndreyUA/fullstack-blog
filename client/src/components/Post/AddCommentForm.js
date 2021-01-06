import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "../UI/Input/Input";
import "./AddCommentForm.css";

import { connect } from "react-redux";
import { addComment } from "../../store/actions/posts";

const AddCommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };

  return (
    <>
      <h5 className="AddPostForm-text">Add new comment...</h5>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="AddPostForm_form AddCommentForm_form"
      >
        <textarea
          className="AddPostForm_txtarea AddCommentForm_txtarea"
          onChange={(e) => setText(e.target.value)}
          name="text"
          placeholder="Create a comment"
          required
          value={text}
        ></textarea>
        <Input
          type="submit"
          addClassName="AddPostForm_input"
          className="AddPostForm_sub"
          value="Submit"
        />
      </form>
    </>
  );
};

AddCommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default connect(null, { addComment })(AddCommentForm);
