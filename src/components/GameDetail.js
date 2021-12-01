import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";

export const GameDetail = () => {
  const { game, screenshots } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms
                ? game.platforms.map((item) => (
                    <h3 key={item.platform.id}>{item.platform.name}</h3>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.results.map((screen) => (
            <img src={screen.image} alt="gallery img" key={screen.id} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00adb5;
  }
  &::-webkit-scrollbar-track {
    background: #fafafa;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 6px;
  padding: 2rem 20rem;
  background: #fafafa;
  position: absolute;
  left: 10%;
  color: #222831;
  img {
    width: 100%;
  }
`;
