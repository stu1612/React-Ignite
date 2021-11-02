import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ incrementCounter, decrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
