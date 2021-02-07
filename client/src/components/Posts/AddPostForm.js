import React, { useState } from "react";
import PropTypes from "prop-types";

import "./AddPostForm.css";
import Input from "../UI/Input/Input";

import { connect } from "react-redux";
import { addPost } from "../../store/actions/posts";

const AddPostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };
  return (
    <div className="AddPostForm">
      <h3 className="AddPostForm_text">Add new post...</h3>
      <form onSubmit={(e) => submitHandler(e)} className="AddPostForm_form">
        <textarea
          className="AddPostForm_txtarea"
          onChange={(e) => setText(e.target.value)}
          name="text"
          placeholder="Create a post"
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
    </div>
  );
};

AddPostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPostForm);
