import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Hello from './Components/Hello/Hello';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import Bfast from './Components/Bfast/Bfast';




function App() {
 
  return (
    <div>
        <Header></Header>
      <Router>
        <Switch>
          <Route path="/">
          <Shop></Shop>
          </Route>
          <Route path="/breakfast">
            <Bfast></Bfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/hello">
            <Hello></Hello>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
