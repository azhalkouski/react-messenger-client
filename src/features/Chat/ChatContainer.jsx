import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatView from './ChatView';
import { fetchChatMessages as fetchMessages } from './actions';
import { getChatMessages, getPeer } from './selectors';

class ChatContainer extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
    peer: PropTypes.object,
    fetchChatMessages: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  // TODO: consider removing defaultProps, make isRequired
  static defaultProps = {
    messages: [],
    peer: null,
  }

  componentDidMount() {
    const { fetchChatMessages, match } = this.props;
    fetchChatMessages(match.params.chatId);
  }

  render() {
    const { messages, peer } = this.props;

    return (
      <ChatView messages={messages} peer={peer} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: getChatMessages(state),
  peer: getPeer(state, ownProps.match.params.chatId),
});

const mapDispatchToProps = {
  fetchChatMessages: fetchMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
