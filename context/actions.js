import axios from "../api/tracker";

export const SIGNUP = "SIGNUP";
export const ADD_ERROR = "ADD_ERROR";

export const signup = async (dispatch, payload) => {
  try {
    const response = await axios.post("/signup", payload);
    const token = await response.data.token;
    dispatch({ type: SIGNUP, token });
    console.log("response: ", token);
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      message: "Something went wrong with sign up!!",
    });
    console.log("error: ", error.response.data);
  }
};
