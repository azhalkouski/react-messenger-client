import {
  takeLatest,
  all,
  put,
  select,
} from 'redux-saga/effects';
import {
  FETCH_CHAT_MESSAGES,
  fetchChatMessagesSuccess,
  fetchChatMessagesError,
} from './actions';

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const user = yield select(state => state.auth.user);

  try {
    const messages = yield fetch(`/api/v1/chats/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(response => response.json());
    yield put(fetchChatMessagesSuccess(messages));
  } catch (error) {
    yield put(fetchChatMessagesError(error));
  }
}

export default function () {
  return all([
    takeLatest(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga),
  ]);
}
