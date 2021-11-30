import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

export const Game = ({ key, name, released, image, slug }) => {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={slug} />
    </div>
  );
};
