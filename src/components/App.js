import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './header/Header';
import MyProfile from './MyProfile/MyProfile';
import classes from './App.module.css';

const App = () => (
  <div>
  <Header />
    <main className={classes.appContainer}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rockets" />
        </Route>

        <Route path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
    </main>

  </div>
);

export default App;
