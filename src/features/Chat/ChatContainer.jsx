import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatView from './ChatView';
import { fetchChatMessages as fetchMessages } from './actions';

class ChatContainer extends React.Component {
  static propTypes = {
    fetchChatMessages: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { fetchChatMessages, match } = this.props;
    fetchChatMessages(match.params.chatId);
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
