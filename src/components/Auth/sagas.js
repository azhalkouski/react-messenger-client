import { takeLatest, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  SIGN_UP,
  SIGN_IN,

  signUpLoading,
  signUpSuccess,
  signUpError,
  signInLoading,
  signInSuccess,
  signInError,
} from './actions';

function* signUpSaga({ payload }) {
  yield put(signUpLoading());
  try {
    const user = yield fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
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

function* signInSaga({ payload }) {
  yield put(signInLoading());
  try {
    const user = yield fetch('/api/v1/auth', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json());
    yield put(signInSuccess(user));
    yield put(push('/'));
  } catch (e) {
    yield put(signInError(e));
  }
}

export default function () {
  return all([
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(SIGN_IN, signInSaga),
  ]);
}
