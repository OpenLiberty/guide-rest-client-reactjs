import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// tag::dom-render[]
ReactDOM.render(<App />, document.getElementById('root'));
// end::dom-render[]

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// tag:service-worker[]
serviceWorker.unregister();
// end::service-worker[]
