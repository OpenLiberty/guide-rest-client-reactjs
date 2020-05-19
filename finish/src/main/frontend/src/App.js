import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
// tag::import-fetchdata
import Fetchdata from './Components/Fetchdata';


function App() {
  return (
    <div className="App">
    <Fetchdata/>
    </div>
  );
}

export default App;
