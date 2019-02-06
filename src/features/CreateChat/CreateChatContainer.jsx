import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUserType, userType } from './propTypes';
import CreateChatView from './CreateChatView';
import { fetchUsers } from './actions';
import { getUsers } from './selectors';

class CreateChatContainer extends React.Component {
  static propTypes = {
    user: authUserType.isRequired,
    users: PropTypes.arrayOf(userType).isRequired,
    handleFetchUsers: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { user, handleFetchUsers, history } = this.props;

    if (!user.token) {
      history.replace({ pathname: '/auth' });
    }

    handleFetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <CreateChatView users={users} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  users: getUsers(state),
});

const mapDispatchToProps = {
  handleFetchUsers: fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChatContainer);
