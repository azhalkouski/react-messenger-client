import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import './main.css';

import App from './components/App';

render((
  <App />
), document.getElementById('root'));
