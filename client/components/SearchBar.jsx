import React from 'react';

const SearchBar = ({
    searchType,
    searchValue,
    handleSearchValue,
    searchSubmit
  }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <select className="custom-select" onChange={(e) => searchType(e)}>
            <option value="player">Player</option>
            <option value="team">Team</option>
          </select>
        </div>
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="" aria-label="" aria-describedby="basic-addon1"
              value={searchValue}
              onChange={(e) => handleSearchValue(e)}
            />
            <div className="input-group-append">
              <input
                type="button"
                className="btn btn-outline-info"
                value="Search"
                onClick={() => searchSubmit()}
              />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}



export default SearchBar;