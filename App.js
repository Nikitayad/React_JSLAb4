// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expenselist from './Expenselist';
import Addexpenseform from './Addexpenseform';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Expenselist} />
        <Route path="/add" component={Addexpenseform} />
      </Switch>
    </Router>
  );
}

export default App;
