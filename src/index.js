import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store'

store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <h1>Hi sir, <span style={cssStyle}>{greetings}</span></h1> */}
  </React.StrictMode>
);


