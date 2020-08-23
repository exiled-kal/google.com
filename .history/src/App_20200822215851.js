import React from 'react';

import './App.css';
import Home from './pages/Home';
import {BrowerRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>

      <Switch>
        <Route path="/search"
      </Switch>
        <h1>Hey Programmer, let's build the google chrome.</h1>

        {/* Home ( the one with the search on) */}
        <Home />
        {/* Search Page( The results page) */}
      </Router>
    </div>
  );
}

export default App;
