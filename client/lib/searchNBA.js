const request = require('request');

var searchNBA = ({key, query}, callback) => {
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    qs: {
      page: '0',
      per_page: '25',
      search: query},
    headers: {
      'x-rapidapi-key': key,
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      useQueryString: true
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    callback(body);
  });
}

export default searchNBA;