import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import './main.css';

import App from './features/App';

render((
  <App />
), document.getElementById('root'));
