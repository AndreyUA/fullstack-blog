import axios from "axios";

import {
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from "./types";
import setAuthToken from "../../utils/setAuthToken";

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await axios.get("/api/login");

    dispatch({
      type: USER_LOADED,
      payload: response.data,
    });
  } catch (error) {}
};

// Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const response = await axios.post("/api/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    /*
        if (errors) {
          errors.forEach((item) => dispatch(setAlert(item.msg, "danger")));
        }
        */
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};
