import PropTypes from 'prop-types';

const userType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export default userType;
