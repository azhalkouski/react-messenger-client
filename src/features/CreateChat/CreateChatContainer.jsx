import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUserType, userType } from './propTypes';
import CreateChatView from './CreateChatView';
import { fetchUsers, createChat } from './actions';
import { getUsers } from './selectors';
import filterPeers from './utils/filterPeers';

class CreateChatContainer extends React.Component {
  static propTypes = {
    user: authUserType.isRequired,
    users: PropTypes.arrayOf(userType),
    handleFetchUsers: PropTypes.func.isRequired,
    handleCreateChat: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  static defaultProps = {
    users: [],
  }

  componentDidMount() {
    const { user, handleFetchUsers, history } = this.props;

    if (!user.token) {
      history.replace({ pathname: '/auth' });
    }

    handleFetchUsers();
  }

  render() {
    const { user, users, handleCreateChat } = this.props;

    return (
      <CreateChatView users={filterPeers(user._id, users)} onCreateChat={handleCreateChat} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  users: getUsers(state),
});

const mapDispatchToProps = {
  handleFetchUsers: fetchUsers,
  handleCreateChat: createChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChatContainer);
