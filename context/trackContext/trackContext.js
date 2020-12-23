import React, { useReducer, useContext } from "react";

export const TrackContext = React.createContext();

export const TrackProvider = ({ initialState, reducer, children }) => {
  return (
    <TrackContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrackStateValue = () => useContext(TrackContext);
