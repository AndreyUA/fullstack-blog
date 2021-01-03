import axios from "axios";

import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  UPDATE_LIKE,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post("/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Get post by ID
export const getPost = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/posts/addlike/${id}`);

    dispatch({
      type: UPDATE_LIKE,
      payload: { id, likes: response.data },
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};
