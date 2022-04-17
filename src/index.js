import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.js';
// import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>,
   document.getElementById('root')
);
// reportWebVitals();
