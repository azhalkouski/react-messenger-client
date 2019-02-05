
import sortChatsByDate from './sortChatsByDate';

describe('sortChatsByDate', () => {
  let chats;
  let sortedChats;

  beforeEach(() => {
    sortedChats = sortChatsByDate(chats);
  });

  describe('when the lastest active chat is the last by order', () => {
    beforeAll(() => {
      chats = [
        { id: 1, lastMessage: { created: new Date('December 17, 1995 03:24:00').toISOString() } },
        { id: 2, lastMessage: { created: new Date('December 17, 1995 03:25:00').toISOString() } },
        { id: 3, lastMessage: { created: new Date('December 17, 1995 03:26:00').toISOString() } },
      ];
    });

    it('should make the lastest active chat be the first by order', () => {
      expect(sortedChats[0].id).toEqual(3);
    });
  });
});
