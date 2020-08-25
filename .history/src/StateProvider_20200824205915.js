import React, {createContext, useContext, useReducer} from 'react';

// Preparing the data layer

export const StateContext = createContext();


export const StateProvider = ({reducer, initialState})