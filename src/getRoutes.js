import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import history from './utils/history';
import SignUpForm from './features/Auth/SignUpForm';
import SignInForm from './features/Auth/SignInForm';
import Messenger from './features/Messenger';

export default function () {
  return (
    <ConnectedRouter history={history}>
      <div className="container">
        <CssBaseline />
        <Switch>
          <Route exact path="/messenger" component={Messenger} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}
