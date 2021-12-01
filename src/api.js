// base url
const base_url = "https://api.rawg.io/api/";

// Get Month Var
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get Day Var
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const pageSize = `&page_size=11`;

const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating${pageSize}`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added${pageSize}`;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released${pageSize}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

export const gamesDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;

export const gamesScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
