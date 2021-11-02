import React, { useEffect, useContext } from "react";
import { popularGamesUrl } from "../api";
import { CounterContext } from "../contexts/counterContext";

export const Games = () => {
  const { counter, incrementCounter, decrementCounter } =
    useContext(CounterContext);

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
      <button onClick={incrementCounter}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
