import axios from "../api/tracker";

export const signup = async (dispatch, payload) => {
  const response = axios("/signup", {});
};
