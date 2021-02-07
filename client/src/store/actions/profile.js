import axios from "axios";

import { CLEAR_PROFILE, GET_PROFILE, UPDATE_PROFILE } from "./types";
import { setAlert } from "./alert";

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

// Change profile
export const updateProfile = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(`/api/profile/${id}`, formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });

    dispatch(setAlert("Your profile was updated", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach((item) => dispatch(setAlert(item.msg, "danger")));
    }
  }
};
