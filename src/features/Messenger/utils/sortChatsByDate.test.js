
import sortChatsByDate from './sortChatsByDate';

/**
 * @param {number} min - minutes
 */
const genISOString = min => new Date(`December 17, 1995 03:${min}:00`).toISOString();

describe('sortChatsByDate', () => {
  let chats;
  let sortedChats;

  beforeEach(() => {
    sortedChats = sortChatsByDate(chats);
  });

  describe('when all the chats have messages', () => {
    describe('and the latest active chat is the last by order', () => {
      beforeAll(() => {
        chats = [
          { id: 1, lastActive: genISOString(24), lastMessage: { created: genISOString(25) } },
          { id: 2, lastActive: genISOString(25), lastMessage: { created: genISOString(26) } },
          { id: 3, lastActive: genISOString(26), lastMessage: { created: genISOString(27) } },
        ];
      });

      it('should make the latest active chat be the first by order', () => {
        expect(sortedChats[0].id).toEqual(3);
      });

      it('should make the oldest active chat be the last by order', () => {
        expect(sortedChats[2].id).toEqual(1);
      });
    });
  });

  describe('when some of chats don\'t have messages', () => {
    describe('and the latest active chat is the last by order', () => {
      beforeAll(() => {
        chats = [
          { id: 1, lastActive: genISOString(24), lastMessage: { created: genISOString(26) } },
          { id: 2, lastActive: genISOString(25) },
          { id: 3, lastActive: genISOString(26), lastMessage: { created: genISOString(27) } },
        ];
      });

      it('should make the latest active chat be the first by order', () => {
        expect(sortedChats[0].id).toEqual(3);
      });

      it('should make the oldest active chat be the last by order', () => {
        expect(sortedChats[2].id).toEqual(2);
      });
    });

    describe('and the latest active chat is in the middle of order', () => {
      beforeAll(() => {
        chats = [
          { id: 1, lastActive: genISOString(24), lastMessage: { created: genISOString(25) } },
          { id: 2, lastActive: genISOString(25), lastMessage: { created: genISOString(27) } },
          { id: 3, lastActive: genISOString(26) },
        ];
      });

      it('should make the latest active chat be the first by order', () => {
        expect(sortedChats[0].id).toEqual(2);
      });

      it('should make the oldest active chat be the last by order', () => {
        expect(sortedChats[2].id).toEqual(1);
      });
    });
  });
});
