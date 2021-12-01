import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { Game } from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // return data from store
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming </h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            slug={game.slug}
          />
        ))}
      </Games>
      <h2>Popular</h2>
      <Games>
        {popular.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            slug={game.slug}
          />
        ))}
      </Games>
      <h2>New Games </h2>
      <Games>
        {newGames.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            slug={game.slug}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;

export default Home;
