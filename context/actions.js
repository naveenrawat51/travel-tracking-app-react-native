import axios from "../api/tracker";
import { AsyncStorage } from "react-native";

export const SIGNUP = "SIGNUP";
export const ADD_ERROR = "ADD_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";
export const LOGOUT = "LOGOUT";

export const signup = async (dispatch, payload) => {
  try {
    const response = await axios.post("/signup", payload);
    const token = await response.data.token;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: SIGNUP, token });
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      message: "Something went wrong with sign up!!",
    });
    console.log("error: ", error.response.data);
  }
};

export const signin = async (dispatch, payload) => {
  try {
    const response = await axios.post("/signin", payload);
    const token = await response.data.token;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: SIGNUP, token });
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      message: "Something went wrong with sign up!!",
    });
    console.log("error: ", error.response.data);
  }
};

export const tryLocalSignin = async (dispatch) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGNUP, token });
  }
};
