import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

export const Game = ({ id, name, released, image, slug }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={slug} />
    </div>
  );
};
