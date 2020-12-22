import React, { useReducer, useContext } from "react";

const TrackContext = React.createContext();

export const TrackProvider = ({ reducer, initialState, children }) => {
  return (
    <TrackContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TrackContext.Provider>
  );
};

export const useStateValue = () => useContext(TrackContext);
