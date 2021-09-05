import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Main from './components/mainPage/Main';
import Fridge from './components/fridge/Fridge';
import MealPlan from './components/MealPlan/MealPlan';
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/recipe" exact> <Main /> </Route>
          <Route path="/fridge" exact> <Fridge /> </Route>
          <Route path="/meal-plan" exact> <MealPlan /> </Route>
          <Route to="/"><HomePage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
