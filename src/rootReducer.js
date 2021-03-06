import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { dataReducer } from './modules/data';
import auth from './features/Auth/reducer';
import messenger from './features/Messenger/reducer';
import chat from './features/Chat/reducer';
import createChat from './features/CreateChat/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  data: dataReducer,
  auth,
  messenger,
  chat,
  createChat,
});
