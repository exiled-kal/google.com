import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
      </div>
    </div>
  );
}

export default Search;
