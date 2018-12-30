import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatView from './ChatView';
import { fetchChatMessages, postChatMessage } from './actions';
import { getChatMessages, getPeer } from './selectors';

class ChatContainer extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
    peer: PropTypes.object,
    fetchMessages: PropTypes.func.isRequired,
    postMessage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  // TODO: consider removing defaultProps, make isRequired
  static defaultProps = {
    messages: [],
    peer: null,
  }

  componentDidMount() {
    const { fetchMessages, match } = this.props;
    fetchMessages(match.params.chatId);
  }

  handleMessagePost = (text) => {
    const { postMessage, match } = this.props;

    return postMessage({ chatId: match.params.chatId, text });
  }

  render() {
    const { messages, peer } = this.props;

    return (
      <ChatView
        messages={messages}
        peer={peer}
        onMessagePost={this.handleMessagePost}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: getChatMessages(state, ownProps.match.params.chatId),
  peer: getPeer(state, ownProps.match.params.chatId),
});

const mapDispatchToProps = {
  fetchMessages: fetchChatMessages,
  postMessage: postChatMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
