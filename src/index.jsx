import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '@babel/polyfill';
import history from './utils/history';
import reducers from './reducers';
import './main.css';

import App from './components/App';
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

const store = createStore(reducers);

render((
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Route exact path="/" component={MessengerPage} />
          <Route path="/signup" component={SignUpPage} />
        </App>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
