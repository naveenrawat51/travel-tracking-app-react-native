import { ADD_LOCATION } from "./location.action";

export const locationInitialState = {
  recording: false,
  locations: [],
  currentLocation: null,
};

export function locationReducer(state = locationInitialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      //console.log('location: ', action.location);
      return {
        ...state,
        // locations: [...state.locations, action.location],
        currentLocation: action.location,
      };
  }
  return state;
}
