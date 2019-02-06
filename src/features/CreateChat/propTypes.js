import PropTypes from 'prop-types';

export const authUserType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
});

export const userType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});
