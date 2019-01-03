import {
  takeLatest,
  all,
  put,
} from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItem, pushItems } from '../../modules/data';
import {
  FETCH_CHATS,
  fetchChatsSuccess,
} from './actions';

function* fetchChatsSaga() {
  const { chats, users, messages } = yield api.messenger.getChats();
  yield put(pushItems('users', users));
  yield put(pushItems('messages', messages));
  yield chats.map(chat => put(pushItem('chatMetas', {
    _id: chat._id,
    messageIds: chat.lastMessageId ? [chat.lastMessageId] : [],
  })));
  yield put(pushItems('chats', chats));
  yield put(fetchChatsSuccess(chats));
}

export default function () {
  return all([
    takeLatest(FETCH_CHATS, fetchChatsSaga),
  ]);
}
