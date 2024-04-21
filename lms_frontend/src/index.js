import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // here made the chnages to prevent the double console logging the responses by removing the React.StrictMode. however it can face 
  // some issures in the meantime. just add the React.StrictMode if you ran to a issue.
 // <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
   // {/* <Main/> */}
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
