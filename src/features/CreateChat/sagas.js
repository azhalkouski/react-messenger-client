import { takeLatest, put } from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import { FETCH_USERS, fetchUsersSuccess, fetchUsersError } from './actions';

function* fetchUsersSaga() {
  try {
    const users = yield api.users.getUsers();
    yield put(pushItems('users', users));
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

export default function* () {
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
}
