import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createSocket from 'socket.io-client';
import Route from 'react-router-dom/Route';
import MessengerView from './MessengerView';
import { userType, chatType } from './propTypes';
import { fetchChats as fetchChatsAction } from './actions';
import { fetchChatMessages as fetchChatMessagesAction } from '../Chat/actions';
import { getChats } from './selectors';
import Chat from '../Chat';

class MessengerContainer extends PureComponent {
  static propTypes = {
    user: userType.isRequired,
    chats: PropTypes.arrayOf(chatType).isRequired,
    fetchChats: PropTypes.func.isRequired,
    fetchChatMessages: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const {
      user,
      fetchChats,
      fetchChatMessages,
      history,
    } = this.props;

    if (!user.token) {
      history.replace({ pathname: '/auth' });
    } else {
      fetchChats();

      const socket = createSocket('http://localhost:8080');
      socket.on('connect', () => {
        socket.emit('ws/listening', { userId: user._id });
        socket.on('ws/new-message', ({ chatId }) => fetchChatMessages(chatId));
      });
    }
  }

  render() {
    const { user, chats } = this.props;

    return (
      <MessengerView user={user} chats={chats}>
        <Route path="/messenger/:chatId" component={Chat} />
      </MessengerView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: getChats(state),
});

const mapDispatchToProps = {
  fetchChats: fetchChatsAction,
  fetchChatMessages: fetchChatMessagesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
