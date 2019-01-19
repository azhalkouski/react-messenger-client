import { takeLatest, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../modules/api';
import {
  SIGN_UP,
  signUpLoading,
  signUpSuccess,
  signUpError,
  SIGN_IN,
  signInLoading,
  signInSuccess,
  signInError,
} from './actions';

function* signUpSaga({ payload }) {
  yield put(signUpLoading());

  try {
    const user = yield api.auth.createUser(payload.email, payload.password);
    yield put(signUpSuccess(user));
    yield put(push('/'));
  } catch (err) {
    yield put(signUpError(err));
  }
}

function* signInSaga({ payload }) {
  yield put(signInLoading());

  try {
    const user = yield api.auth.signIn(payload.email, payload.password);
    yield put(signInSuccess(user));
    yield put(push('/'));
  } catch (err) {
    yield put(signInError(err));
  }
}

export default function () {
  return all([
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(SIGN_IN, signInSaga),
  ]);
}
