import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatView from './ChatView';
import { fetchChatMessages as fetchMessages } from './actions';

class ChatContainer extends React.Component {
  static propTypes = {
    chatId: PropTypes.string.isRequired,
    fetchChatMessages: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchChatMessages, chatId } = this.props;
    fetchChatMessages(chatId);
  }

  render() {
    return (
      <ChatView />
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  fetchChatMessages: fetchMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
