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

// Get Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// API key
const apiKey = process.env.REACT_APP_API_KEY;

export const popularGamesUrl = () =>
  `${base_url}games?key=${apiKey}${popularGames}`;
