import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './header/Header';
import Rockets from './rockets/Rockets';
import Missions from './missions/Missions';
import MyProfile from './myprofile/MyProfile';
import classes from './App.module.css';

const App = () => (
  <div>
    <Header />
    <main className={classes.appContainer}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rockets" />
        </Route>

        <Route path="/missions">
          <Missions />
        </Route>

        <Route path="/rockets">
          <Rockets />
        </Route>

        <Route path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
    </main>

  </div>
);

export default App;
