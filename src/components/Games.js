import React, { useEffect } from "react";
import { popularGamesUrl } from "../api";

export const Games = () => {
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
    </div>
  );
};
