import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { dataReducer } from './modules/data';
import auth from './features/Auth/reducer';
import messenger from './features/Messenger/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  data: dataReducer,
  auth,
  messenger,
});
