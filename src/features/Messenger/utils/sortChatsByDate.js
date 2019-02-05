import moment from 'moment';

/**
 * @param {array} chats - array of chats
 * @returns {array} chats - the first chat is the latest active one
 */
const sortChatsByDate = chats =>
  chats
    .sort((a, b) => (
      moment(b.lastMessage.created).valueOf() - moment(a.lastMessage.created).valueOf()
    ));

export default sortChatsByDate;
