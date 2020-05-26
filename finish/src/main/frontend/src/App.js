import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';


function App() {
  return (
    // tag::react-fragment[]
    <React.Fragment>
      <Display/>
    </React.Fragment>
    // end::react-fragment[]
  );
}

export default App;