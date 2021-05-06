import axios from "axios";

import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  UPDATE_LIKE,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./types";

import { setAlert } from "./alert";

// Get posts
export const getPosts = (pageId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/posts/part/${pageId}`);

    console.log(response.data);

    dispatch({
      type: GET_POSTS,
      payload: response.data.selected,
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

    dispatch(setAlert("You created a new post", "success"));
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

    dispatch(setAlert("You deleted your post", "danger"));
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

    dispatch(setAlert("You liked a post", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/posts/removelike/${id}`);

    dispatch({
      type: UPDATE_LIKE,
      payload: { id, likes: response.data },
    });

    dispatch(setAlert("You unliked a post", "danger"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Add comment
export const addComment = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `/api/posts/comment/${id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: response.data,
    });

    dispatch(setAlert("You added a comment", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  console.log(postId, " ", commentId);
  try {
    const response = await axios.delete(
      `/api/posts/comment/${postId}/${commentId}`
    );

    dispatch({
      type: DELETE_COMMENT,
      payload: response.data,
    });

    dispatch(setAlert("You removed a comment", "danger"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};
