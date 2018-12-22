import { all } from 'redux-saga/effects';
import auth from './features/Auth/sagas';
import messenger from './features/Messenger/sagas';
import chat from './features/Chat/sagas';

export default function* () {
  yield all([
    auth(),
    messenger(),
    chat(),
  ]);
}
