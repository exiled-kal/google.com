import React from 'react';
import './SearchPage.css';
import {useStateValue} from './StateProvider';

function SearchPage() {
  const [{term}, dispatch] = useStateValue;

  return (
    <div className="searchPage">
      <div className="searchPage__header"></div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
