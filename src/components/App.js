import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
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
