/**
 * @param {string} userId - currently authenticated user
 * @param {Array} users - all users
 */
const filterPeers = (userId, users) =>
  users.filter(user => user._id !== userId);

export default filterPeers;
