import {
  ADD_LOCATION,
  ADD_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  CHANGE_NAME,
} from "./location.action";

export const locationInitialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: null,
};

export function locationReducer(state = locationInitialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.location],
      };
    case ADD_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.location,
      };
    case START_RECORDING:
      return {
        ...state,
        recording: true,
      };
    case STOP_RECORDING:
      return {
        ...state,
        recording: false,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
  }
  return state;
}
