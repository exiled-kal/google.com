import React from 'react';
import './SearchPage.css';
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
  const [{term}, dispatch] = useStateValue();
  // live api call
  const {data} = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to='/'>
          <img
          className="https:www.google.com/images/branding/goodlelogo/2x/goolgelogo_color_272892dp.png"
        </Link>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
