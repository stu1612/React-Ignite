import axios from "axios";
import { gamesDetailsURL, gamesScreenshotURL } from "../api";

//Actions
export const loadDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(gamesDetailsURL(id));
  const screenShotData = await axios.get(gamesScreenshotURL(id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailsData.data,
      screenshots: screenShotData.data,
    },
  });
};
