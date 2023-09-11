import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './resources/css/style.css';
import { BrowserRouter } from 'react-router-dom';

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('REACT_APP_BASENAME:', process.env.REACT_APP_BASENAME);

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? process.env.REACT_APP_BASENAME : '';

console.log('Basename:', basename);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
);
