import {
  takeLatest,
  all,
  put,
} from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItem, pushItems } from '../../modules/data';
import {
  FETCH_CHAT_MESSAGES,
  fetchChatMessagesSuccess,
  POST_CHAT_MESSAGE,
  postChatMessageSuccess,
} from './actions';

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const messages = yield api.chat.getChatMessages(chatId);

  yield put(pushItems('messages', messages));
  yield put(fetchChatMessagesSuccess(messages));
}

function* postChatMessageSaga({ payload }) {
  const { chatId, text } = payload;
  const message = yield api.chat.postChatMessage({ chatId, text });

  yield put(pushItem('messages', message));
  yield put(postChatMessageSuccess(message));
}

export default function () {
  return all([
    takeLatest(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga),
    takeLatest(POST_CHAT_MESSAGE, postChatMessageSaga),
  ]);
}
