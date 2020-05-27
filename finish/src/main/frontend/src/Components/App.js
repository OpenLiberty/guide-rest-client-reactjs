import React from 'react';
import '../Styles/App.css';
import Fetchdata from './Fetchdata';


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