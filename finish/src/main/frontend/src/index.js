// tag::import-react[]
import React from 'react';
// end::import-react[]
// tag::react-dom[]
import { createRoot } from 'react-dom/client'
// end::react-dom[]
import './Styles/index.css';
import App from './Components/App';

// tag::createRoot[]
createRoot(document.getElementById('root')).render(<App />);
// end::createRoot[]
