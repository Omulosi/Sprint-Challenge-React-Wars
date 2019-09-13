import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Alert from'./components/Alert';

import './App.css';
import axios from 'axios';

const swapiAPI = 'https://swapi.co/api/people';
//const swapiAPI = 'http://httpbin.org/status/404';


const App = () => {
  const [state, setState] = useState({results: [], isLoaded: false});
  const [message, setAlert] = useState('Loading...');

  useEffect(()=> {
    // set the isLoaded property to false before the request begins
    Object.assign({}, state, {isLoaded: false});
    axios.get(swapiAPI)
      .then(response => response.data)
      .then(data => {
        // set isLoaded property to true when request is successful
        let state = Object.assign({}, {results: data.results}, {isLoaded: true})
        setState(state);
      })
      .catch(error => {
        // set a new alert message
        setAlert('Opps! Try again!');
        // wait for 2 sec and set isLoaded to true. This ensures that the alert element
        // no longer displays after 2 seconds.
        setTimeout(() => {
          setState(Object.assign({}, {results: state.results}, {isLoaded: true}));
        }, 2000)
      })
  }, [state, message])

  const { isLoaded } = state;

  // Returns a page with an alert message telling user whether the page
  // is still loading or there has been an error.
  if (!isLoaded) {
    return <Alert message={message} isLoaded={isLoaded}/>
  }

  return (
    <div className="App container">
      <h1 className="Header">React Wars</h1>
      <p className='tagline'> Your favorite Star Wars characters!</p>
      <div className='main-content'>
        <Main data={state.results}/>
      </div>
    </div>
  );
}

export default App;
