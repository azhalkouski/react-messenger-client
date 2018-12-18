import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import history from '../../utils/history';
import store from '../../configureStore';
import './styles.css';

import SignUpPage from '../Auth/SignUpPage';
import SignInPage from '../Auth/SignInPage';
import MessengerPage from '../MessengerPage';

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

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={MessengerPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

export default hot(module)(App);
