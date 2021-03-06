import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import history from './utils/history';
import Messenger from './features/Messenger';
import CreateChat from './features/CreateChat';
import Auth from './features/Auth';

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
          <Route path="/auth/:type?" component={Auth} />
          <Route path="/create-chat/:email" component={CreateChat} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}
