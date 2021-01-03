import React from 'react';
import SearchBar from './SearchBar.jsx'
import PlayerView from './PlayerView.jsx';
import Games from './Games.jsx'

const Home = ({
    games,
    tableView,
    searchType,
    searchValue,
    handleSearchValue,
    searchSubmit
  }) => {
  return (
    <div className="content">
      <SearchBar
        searchType={searchType}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        searchSubmit={searchSubmit}
      />

      {tableView ?
      <Games games={games} /> : <PlayerView />}
    </div>

  );

}

export default Home;


