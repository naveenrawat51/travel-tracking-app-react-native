import {
  SIGNIN,
  ADD_ERROR,
  CLEAR_ERROR,
  SET_DID_TRY_AL,
  LOGOUT,
} from "./auth.actions";

export const initialState = {
  token: null,
  errorMessage: null,
  didTryAutoLogin: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        token: action.token,
        didTryAutoLogin: true,
      };
    case ADD_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case LOGOUT: {
      return {
        ...state,
        token: null,
        didTryAutoLogin: false,
        errorMessage: null,
      };
    }
  }
  return state;
}
