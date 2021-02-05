import axios from "axios";

import {
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";
import setAuthToken from "../../utils/setAuthToken";
import { setAlert } from "./alert";

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
  } catch (error) {
    console.log(error);
  }
};

// Create new user
export const registration = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const response = await axios.post("/api/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });

    dispatch(loadUser());
    dispatch(setAlert("User created", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((item) => dispatch(setAlert(item.msg, "danger")));
    }
  }
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

    dispatch(loadUser());
    dispatch(setAlert("Authorization successful", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach((item) => dispatch(setAlert(item.msg, "danger")));
    }
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
