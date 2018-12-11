import { all } from 'redux-saga/effects';
import auth from './components/Auth/sagas';

export default function* () {
  yield all([
    auth(),
  ]);
}
