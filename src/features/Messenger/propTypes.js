import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  _id: PropTypes.string,
  email: PropTypes.string,
});

export const chatType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(userType),
  lastMessage: PropTypes.object,
});
