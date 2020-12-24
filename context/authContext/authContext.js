import React, { useReducer, useContext } from "react";

const TrackContext = React.createContext();

export const AuthProvider = ({ reducer, initialState, children }) => {
  return (
    <TrackContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TrackContext.Provider>
  );
};

export const useAuthStateValue = () => useContext(TrackContext);
