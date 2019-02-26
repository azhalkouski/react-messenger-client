import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authUserType, userType } from './propTypes';
import CreateChatView from './CreateChatView';
import { fetchUsers, createChat } from './actions';
import { getUsers } from './selectors';
import filterPeers from './utils/filterPeers';
import { useAuthTokenCheck } from '../../hooks';

function CreateChatContainer(props) {
  const {
    user,
    users,
    history,
    handleFetchUsers,
    handleCreateChat,
  } = props;

  useAuthTokenCheck(user, history);

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <CreateChatView users={filterPeers(user._id, users)} onCreateChat={handleCreateChat} />
  );
}

CreateChatContainer.propTypes = {
  user: authUserType.isRequired,
  users: PropTypes.arrayOf(userType),
  handleFetchUsers: PropTypes.func.isRequired,
  handleCreateChat: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

CreateChatContainer.defaultProps = {
  users: [],
};


const mapStateToProps = state => ({
  user: state.auth.user,
  users: getUsers(state),
});

const mapDispatchToProps = {
  handleFetchUsers: fetchUsers,
  handleCreateChat: createChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChatContainer);
