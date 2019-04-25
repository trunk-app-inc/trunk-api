import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="wrapper">
        <Home />
      
      </div>
    </div>
  );
}

export default App;
