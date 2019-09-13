import React from 'react';
import Main from './components/Main';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //
  //
  const results = [
    {
      name: "luke skywalker",
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    },
    {
      name: "luke skywalker",
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    },
    {
      name: "luke skywalker",
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    },
    {
      name: "luke skywalker",
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    },
  ]

  return (
    <div className="App container">
      <h1 className="Header">React Wars</h1>
      <p className='tagline'> Your favorite Star Wars characters!</p>
      <div className='main-content'>
        <Main data={results}/>
      </div>
    </div>
  );
}

export default App;
