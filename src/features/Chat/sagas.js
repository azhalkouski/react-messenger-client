import {
  takeLatest,
  all,
  put,
} from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import {
  FETCH_CHAT_MESSAGES,
  fetchChatMessagesSuccess,
} from './actions';

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const messages = yield api.chat.getChatMessages(chatId);

  yield put(pushItems(messages));
  yield put(fetchChatMessagesSuccess(messages));
}

export default function () {
  return all([
    takeLatest(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga),
  ]);
}
