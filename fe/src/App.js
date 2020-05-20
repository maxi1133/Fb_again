import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="date" onChange={e=>{console.log(e.target.value)}}/>
    </div>
  );
}

export default App;
