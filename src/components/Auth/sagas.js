import { takeEvery, all, put } from 'redux-saga/effects';
import {
  SIGN_UP,

  signUpLoading,
  signUpSuccess,
  signUpError,
} from './actions';

function* signUpSaga({ payload }) {
  yield put(signUpLoading());
  try {
    const user = yield fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json());
    yield put(signUpSuccess(user));
  } catch (e) {
    yield put(signUpError(e));
  }
}

export default function () {
  return all([
    takeEvery(SIGN_UP, signUpSaga),
  ]);
}
