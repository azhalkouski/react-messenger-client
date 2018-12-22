import { all } from 'redux-saga/effects';
import auth from './components/Auth/sagas';
import messenger from './components/MessengerPage/sagas';

export default function* () {
  yield all([
    auth(),
    messenger(),
  ]);
}
