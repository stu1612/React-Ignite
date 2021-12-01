import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

export const Game = ({ id, name, released, image, slug }) => {
  // Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame key={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={slug} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  border-radius: 6px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
