import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Alert from'./components/Alert';

import './App.css';
import axios from 'axios';

const swapiAPI = 'https://swapi.co/api/people';
//const swapiAPI = 'https://';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //
  //
  const [state, setState] = useState({results: [], isLoaded: false});
  const [message, setAlert] = useState('Loading...');

  useEffect(()=> {
    Object.assign({}, state, {isLoaded: false});
    axios.get(swapiAPI)
      .then(response => response.data)
      .then(data => {
        let state = Object.assign({}, {results: data.results}, {isLoaded: true})
        setState(state);
      })
      .catch(error => {
        setAlert('Opps! Try again!');
        setTimeout(() => {
          setState(Object.assign({}, {results: state.results}, {isLoaded: true}));
        }, 3000)
      })
  }, [state])

  const isLoaded = state;

  return (
    <div className="App container">
      <Alert message={message} isLoaded={isLoaded}/>
      <h1 className="Header">React Wars</h1>
      <p className='tagline'> Your favorite Star Wars characters!</p>
      <div className='main-content'>
        <Main data={state.results}/>
      </div>
    </div>
  );
}

export default App;
