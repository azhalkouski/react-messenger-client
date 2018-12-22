import {
  takeLatest,
  all,
  put,
  select,
} from 'redux-saga/effects';
import {
  FETCH_CHATS,
  fetchChatsSuccess,
} from './actions';

function* fetchChatsSaga() {
  const user = yield select(store => store.auth.user);

  const chats = yield fetch('/api/v1/chats', {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then(response => response.json());

  yield put(fetchChatsSuccess(chats));
}

export default function () {
  return all([
    takeLatest(FETCH_CHATS, fetchChatsSaga),
  ]);
}
