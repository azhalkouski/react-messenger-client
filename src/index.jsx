import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '@babel/polyfill';
import App from './components/App';
import Hello from './components/Hello';

render((
  <BrowserRouter>
    <App>
      <Route path="/" component={Hello} />
    </App>
  </BrowserRouter>
), document.getElementById('root'));
