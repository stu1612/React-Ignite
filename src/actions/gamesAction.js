import axios from "axios";
import { popularGamesUrl } from "../api";

//Actions
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
