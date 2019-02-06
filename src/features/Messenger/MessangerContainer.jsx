import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createSocket from 'socket.io-client';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import MessengerView from './MessengerView';
import { userType, chatType } from './propTypes';
import { fetchChats as fetchChatsAction } from './actions';
import { fetchChatMessages as fetchChatMessagesAction } from '../Chat/actions';
import { getChats } from './selectors';
import Chat from '../Chat';
import CreateChat from '../CreateChat';
import sortChatsByDate from './utils/sortChatsByDate';

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
      <MessengerView user={user} chats={sortChatsByDate(chats)}>
        <Switch>
          <Route path="/messenger/new" component={CreateChat} />
          <Route path="/messenger/:chatId" component={Chat} />
          <Route
            path="/messenger"
            render={() => (
              <div className="messenger-page__chat--not-selected">
                Select a chat
              </div>
            )}
          />
        </Switch>
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
