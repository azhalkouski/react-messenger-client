import moment from 'moment';

/**
 * @param {array} chats - array of chats
 * @returns {array} chats - the first chat is the latest active one
 */
const sortChatsByDate = chats =>
  chats
    .sort((a, b) => {
      const dateA = a.lastMessage ? a.lastMessage.created : a.lastActive;
      const dateB = b.lastMessage ? b.lastMessage.created : b.lastActive;

      return moment(dateB).valueOf() - moment(dateA).valueOf();
    });

export default sortChatsByDate;
