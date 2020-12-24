import React from 'react';
import SearchBar from './SearchBar.jsx'
import PlayerView from './PlayerView.jsx';
import Games from './Games.jsx'

const Home = ({games, tableView}) => {
  return (
    <div>

      <SearchBar />
      {tableView ?
      <Games games={games} /> : <PlayerView />}
    </div>

  );

}

export default Home;


