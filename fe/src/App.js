import React from 'react';
<<<<<<< .mine
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
||||||| .r5
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
>>>>>>> .r6

function App() {
  return (
<<<<<<< .mine
    <Router>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
||||||| .r5
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <div className="App">
      <input type="date" onChange={e=>{console.log(e.target.value)}}/>
    </div>
>>>>>>> .r6
  );
}

export default App;
