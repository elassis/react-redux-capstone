import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './header/Header';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rockets" />
        </Route>
      </Switch>
    </main>

  </div>
);

export default App;
