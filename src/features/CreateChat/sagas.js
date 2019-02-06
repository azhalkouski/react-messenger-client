import { takeLatest, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import {
  FETCH_USERS,
  fetchUsersSuccess,
  fetchUsersError,
  CREATE_CHAT,
} from './actions';
import { fetchChats } from '../Messenger/actions';

function* fetchUsersSaga() {
  try {
    const users = yield api.users.getUsers();
    yield put(pushItems('users', users));
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

function* createChatSaga({ payload }) {
  yield api.createChat.byPeerId({ peerId: payload });
  yield put(fetchChats());
  yield put(push('/messenger'));
}

export default function () {
  return all([
    takeLatest(FETCH_USERS, fetchUsersSaga),
    takeLatest(CREATE_CHAT, createChatSaga),
  ]);
}
