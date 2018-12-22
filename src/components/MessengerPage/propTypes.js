import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const chatType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(userType),
  lastMessage: PropTypes.string.isRequired,
  lastMessageDate: PropTypes.string.isRequired,
});
