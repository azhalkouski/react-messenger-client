import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './features/Auth/reducer';
import messenger from './features/Messenger/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  messenger,
});
