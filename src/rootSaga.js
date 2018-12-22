import { all } from 'redux-saga/effects';
import auth from './components/Auth/sagas';
import messenger from './components/MessengerPage/sagas';
import chat from './components/Chat/sagas';

export default function* () {
  yield all([
    auth(),
    messenger(),
    chat(),
  ]);
}
