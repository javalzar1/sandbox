import React from 'react';

const get = (API_KEY, callback) => {
  fetch("https://free-nba.p.rapidapi.com/games?per_page=25", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "free-nba.p.rapidapi.com"
    }
  })
  .then(res => res.json())
  .then(data => callback(data))
  .catch(err => {
    console.error(err);
  });
};

export default get;
