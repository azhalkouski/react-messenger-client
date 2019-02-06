import filterPeers from './filterPeers';

describe('filterPeers', () => {
  let users;
  let peers;

  beforeEach(() => {
    peers = filterPeers(2, users);
  });

  describe('when recieves array of users and user id', () => {
    beforeAll(() => {
      users = [
        { _id: 1, name: 'a' },
        { _id: 2, name: 'b' },
        { _id: 3, name: 'c' },
      ];
    });

    it('should return new array', () => {
      expect(peers === users).toBe(false);
    });

    it('should not contain the user with the passed id', () => {
      expect(peers.includes({ _id: 2, name: 'b' })).toBe(false);
    });
  });
});
