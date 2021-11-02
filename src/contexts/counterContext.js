/* eslint-disable no-undef */
import React, { createContext, useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

export const CounterContext = createContext();

const initialState = { count: 0 };

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ dispatch, state }}>
      {children}
    </CounterContext.Provider>
  );
};
