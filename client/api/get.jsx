import React from 'react';
import API_KEY from '../config/nbaData.js';

const apiUrl = 'https://free-nba.p.rapidapi.com/';

const getRequestOptions = {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "free-nba.p.rapidapi.com"
  }
};

const getGames = (callback) => {
  fetch(`${apiUrl}games?per_page=25`, getRequestOptions)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.error(err));
};

const getPlayer = (player, callback) => {
  fetch(`${apiUrl}players?page=0&per_page=25&search=${player}`,
    getRequestOptions)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
};

export {getGames, getPlayer};
