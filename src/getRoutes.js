import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import history from './utils/history';
import { SignUpPage, SignInPage } from './features/Auth';
import Messenger from './features/Messenger';
import CreateChat from './features/CreateChat';

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
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/create-chat/:email" component={CreateChat} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}
