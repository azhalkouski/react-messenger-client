import React from 'react';
import { render } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import '@babel/polyfill';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './main.css';

import App from './components/App';
import Hello from './components/Hello';
import SignUpPage from './components/SignUpPage';
import MessengerPage from './components/MessengerPage';

const getMainColor = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--main-color');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: getMainColor(),
    },
  },
  typography: {
    useNextVariants: true,
  },
});

render((
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Hello} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/messenger" component={MessengerPage} />
      </App>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));
