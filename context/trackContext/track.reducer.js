import { FETCH_TRACK } from "./track.action";

export const trackInitialState = {
  allTracks: [],
};

export function trackReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACK:
      return {
        ...state,
        allTracks: action.tracks,
      };
  }
  return state;
}
