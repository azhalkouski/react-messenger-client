import moment from 'moment';

/**
 * @param {array} chats - array of chats
 * @returns {array} chats - the first chat is the latest active one
 */
const sortChatsByDate = chats =>
  chats
    .sort((a, b) => {
      let result;

      if (a.lastMessage && b.lastMessage) {
        result = moment(b.lastMessage.created).valueOf() - moment(a.lastMessage.created).valueOf();
      }

      if (!a.lastMessage && b.lastMessage) {
        result = moment(b.lastMessage.created).valueOf() - moment(a.lastActive).valueOf();
      }

      if (a.lastMessage && !b.lastMessage) {
        result = moment(b.lastActive).valueOf() - moment(a.lastMessage.created).valueOf();
      }

      if (!a.lastMessage && !b.lastMessage) {
        result = moment(b.lastActive).valueOf() - moment(a.lastActive).valueOf();
      }

      return result;
    });

export default sortChatsByDate;
