import { getItem, getItems } from '../../modules/data';
import { getCurrentUserId } from '../Auth/selectors';

export const getChatMessages = (state) => {
  const messages = getItems(state, 'messages', state.chat.messageIds);
  const populatedMessages = messages.map(message => ({
    ...message,
    user: getItem(state, 'users', message.userId),
  }));

  return populatedMessages;
};

export const getPeer = (state, chatId) => {
  const currentUserId = getCurrentUserId(state);
  const chat = getItem(state, 'chats', chatId);
  const peerId = chat.userIds.filter(id => id !== currentUserId)[0];
  const peer = getItem(state, 'users', peerId);

  return peer;
};
