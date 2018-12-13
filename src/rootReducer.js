import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './components/Auth/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
});
