import React from 'react';
import SearchBar from './SearchBar.jsx'
import PlayerView from './PlayerView.jsx';
import Games from './Games.jsx'

const Home = ({ games, tableView, searchType }) => {
  return (
    <div className="content">
      <SearchBar searchType={searchType}/>

      {tableView ?
      <Games games={games} /> : <PlayerView />}
    </div>

  );

}

export default Home;


