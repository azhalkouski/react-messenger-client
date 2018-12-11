import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '@babel/polyfill';
import history from './utils/history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import './main.css';

import App from './components/App';
import SignUpPage from './components/Auth/SignUpPage';
import SignInPage from './components/Auth/SignInPage';
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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

render((
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Route exact path="/" component={MessengerPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
        </App>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
