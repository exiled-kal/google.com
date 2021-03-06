import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>This is the Home</h1>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link></Link>
          {/* Link */}
        </div>
        <div className="home__headerRight">
          {/* Link */}
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
