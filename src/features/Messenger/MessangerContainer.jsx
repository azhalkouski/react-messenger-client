import React, { useEffect } from 'react';
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
import { useAuthTokenCheck } from '../../hooks';

function MessengerContainer(props) {
  const {
    user,
    chats,
    fetchChats,
    fetchChatMessages,
    history,
  } = props;

  useAuthTokenCheck(user, history);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    const socket = createSocket('http://localhost:8080');
    socket.on('connect', () => {
      socket.emit('ws/listening', { userId: user._id });
      socket.on('ws/new-message', ({ chatId }) => fetchChatMessages(chatId));
      socket.on('ws/new-chat', () => fetchChats());
    });

    return () => {
      socket.disconnect();
    };
  }, [user._id]);

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

MessengerContainer.propTypes = {
  user: userType.isRequired,
  chats: PropTypes.arrayOf(chatType).isRequired,
  fetchChats: PropTypes.func.isRequired,
  fetchChatMessages: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.auth.user,
  chats: getChats(state),
});

const mapDispatchToProps = {
  fetchChats: fetchChatsAction,
  fetchChatMessages: fetchChatMessagesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
