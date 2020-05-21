import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetchdata from './Components/Fetchdata';

function App() {
  return (
    // tag::react-fragment[]
    <React.Fragment>
      <Fetchdata/>
    </React.Fragment>
    // end::react-fragment[]
  );
}

export default App;