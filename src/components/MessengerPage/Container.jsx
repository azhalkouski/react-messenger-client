import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessengerView from './Component';
import { userType, chatType } from './propTypes';
import { fetchChats } from './actions';
import Chat from '../Chat';
// import authService from '../../utils/AuthService';

class MessengerContainer extends PureComponent {
  static propTypes = {
    user: userType.isRequired,
    chats: PropTypes.arrayOf(chatType).isRequired,
    fetchChatsData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // if (!authService.loggedIn()) {
    //     authService.login();
    //   }
    const { fetchChatsData } = this.props;

    fetchChatsData();
  }

  render() {
    const { user, chats } = this.props;

    return (
      <MessengerView user={user} chats={chats}>
        <Chat />
      </MessengerView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: state.messenger.chats,
});

const mapDispatchToProps = {
  fetchChatsData: fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
