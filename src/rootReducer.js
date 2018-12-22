import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './components/Auth/reducer';
import messenger from './components/MessengerPage/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  messenger,
});
