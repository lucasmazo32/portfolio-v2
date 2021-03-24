import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
// import Recruiter from './Recruiter';
// import Survey from './Survey';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
