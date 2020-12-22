import { SIGNUP, ADD_ERROR } from "./actions";

export const initialState = {
  isSignedIn: false,
  token: null,
  errorMessage: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSignedIn: true,
        token: action.token,
      };
    case ADD_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
  }
  return state;
}
