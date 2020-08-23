import React from 'react';

import './App.css';
import Home from './pages/Home';
import {BrowerRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>

      <Switch>
        <Route path="/search">

        </Route>
      </Switch>
        
      </Router>
    </div>
  );
}

export default App;
