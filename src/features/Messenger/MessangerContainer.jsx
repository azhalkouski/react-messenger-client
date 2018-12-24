import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Route from 'react-router-dom/Route';
import MessengerView from './MessengerView';
import { userType, chatType } from './propTypes';
import { fetchChats } from './actions';
import Chat from '../Chat';

class MessengerContainer extends PureComponent {
  static propTypes = {
    user: userType.isRequired,
    chats: PropTypes.arrayOf(chatType).isRequired,
    fetchChatsData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // if (!store.getState().auth.user.token) {
    // TODO: redirect to signin
    // }
    const { fetchChatsData } = this.props;

    fetchChatsData();
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
  chats: state.messenger.chats,
});

const mapDispatchToProps = {
  fetchChatsData: fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
