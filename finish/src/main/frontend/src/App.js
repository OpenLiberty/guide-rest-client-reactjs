import React from 'react';
import logo from './logo.svg';
import './App.css';
// tag::import-fetchdata
import Fetchdata from './Components/Fetchdata';
// end::import-fetchdata

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
