import React, { useEffect, useContext } from "react";
import { popularGamesUrl } from "../api";
import { CounterContext } from "../contexts/counterContext";

export const Games = () => {
  const { dispatch, state } = useContext(CounterContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(popularGamesUrl());
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Hello </h1>
      <button onClick={() => dispatch({ type: "INCREMENT_1" })}>+</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT_1" })}>-</button>
    </div>
  );
};
