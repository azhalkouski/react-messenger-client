const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';
const FETCH_CHAT_MESSAGES_ERROR = 'FETCH_CHAT_MESSAGES_ERROR';

export const fetchChatMessages = chatId => ({ type: FETCH_CHAT_MESSAGES, payload: chatId });
export const fetchChatMessagesSuccess = messages =>
  ({ type: FETCH_CHAT_MESSAGES_SUCCESS, payload: messages });
export const fetchChatMessagesError = error =>
  ({ type: FETCH_CHAT_MESSAGES_ERROR, payload: error });
