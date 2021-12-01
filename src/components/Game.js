import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { useHistory } from "react-router";

export const Game = ({ id, name, released, image, slug }) => {
  // Scrolling check
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  // Load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame key={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <Wrapper>
          <h3>{name}</h3>
          <p>{released}</p>
        </Wrapper>
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
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
  }
`;

const Wrapper = styled(motion.div)`
  height: 15vh;
`;
