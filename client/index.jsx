import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import App from './components/App.jsx';
import API_KEY from './config/nbaData.js';


ReactDOM.render(
  <App API_KEY={API_KEY}/>, document.getElementById('app'));
//searchNBA={searchNBA} API_KEY={API_KEY}