import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TrungGian from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path={'/'} component={TrungGian} /> */}
        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
