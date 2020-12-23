import React, { useReducer, useContext } from "react";

const LocationContext = React.createContext();

export const LocationProvider = ({ reducer, initialState, children }) => {
  return (
    <LocationContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationStateValue = () => useContext(LocationContext);
