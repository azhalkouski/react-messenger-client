import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import MessengerView from './MessengerView';
import { userType, chatType } from './propTypes';
import { fetchChats } from './actions';
import Chat from '../Chat';
// import authService from '../../utils/AuthService';

class MessengerContainer extends PureComponent {
  static propTypes = {
    user: userType.isRequired,
    chats: PropTypes.arrayOf(chatType).isRequired,
    activeChatId: PropTypes.string,
    fetchChatsData: PropTypes.func.isRequired,
  }

  static defaultProps = {
    activeChatId: null,
  }

  componentDidMount() {
    // if (!authService.loggedIn()) {
    //     authService.login();
    //   }
    const { fetchChatsData } = this.props;

    fetchChatsData();
  }

  render() {
    const { user, chats, activeChatId } = this.props;

    return (
      <MessengerView user={user} chats={chats}>
        {
          activeChatId && <Chat chatId={activeChatId} />
        }
      </MessengerView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: state.messenger.chats,
  activeChatId: queryString.parse(state.router.location.search).chatId,
});

const mapDispatchToProps = {
  fetchChatsData: fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
