import axios from "axios";

import { CLEAR_PROFILE, GET_PROFILE, UPDATE_PROFILE } from "./types";

// Get profile
export const getProfile = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/profile/${id}`);

    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};
