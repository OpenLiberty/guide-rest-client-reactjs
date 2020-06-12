// tag::import-react[]
import React from 'react';
// end::import-react[]
// tag::react-dom[]
import ReactDOM from 'react-dom';
// end::react-dom[]
import './styles/index.css';
import App from './components/App';

// tag::dom-render[]
ReactDOM.render(<App />, document.getElementById('root'));
// end::dom-render[]
