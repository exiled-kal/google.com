import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Ser'

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
}

export default Search;
