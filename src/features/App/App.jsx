import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import createStore from '../../createStore';
import getRoutes from '../../getRoutes';
import api from '../../modules/api';
import './styles.css';

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

const store = createStore();

api.initialize(store);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      {getRoutes()}
    </Provider>
  </MuiThemeProvider>
);

export default hot(module)(App);
