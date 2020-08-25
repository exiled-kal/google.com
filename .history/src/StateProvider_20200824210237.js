import React, {createContext, useContext, useReducer} from 'react';

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* the children over here is referred to App component in our index.js */}
    {children}
  </StateContext.Provider>
);

// hook that allows to pull info from the datalayer
export const useStateValue = () => useContext(StateContext);
