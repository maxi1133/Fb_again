import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TrungGian from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={TrungGian} />
      </Switch>
    </Router>
  );
}

export default App;
