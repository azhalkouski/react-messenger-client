export const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
export const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';

export const fetchChatMessages = chatId => ({ type: FETCH_CHAT_MESSAGES, payload: chatId });
export const fetchChatMessagesSuccess = messages =>
  ({ type: FETCH_CHAT_MESSAGES_SUCCESS, payload: messages });
