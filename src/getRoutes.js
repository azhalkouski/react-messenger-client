import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import history from './utils/history';
import SignUpForm from './features/Auth/SignUpForm';
import SignInForm from './features/Auth/SignInForm';
import Messenger from './features/Messenger';

export default function () {
  return (
    <ConnectedRouter history={history}>
      <div className="container">
        <CssBaseline />
        <Route
          exact
          path="/"
          render={() => <Redirect exact path="/" to="/messenger" />}
        />
        <Switch>
          <Route path="/messenger" component={Messenger} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}
