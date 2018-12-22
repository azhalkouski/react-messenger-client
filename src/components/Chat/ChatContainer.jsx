import React from 'react';
import { connect } from 'react-redux';
import ChatView from './ChatView';

class ChatContainer extends React.Component {
  render() {
    return (
      <ChatView />
    );
  }
}

const mapStateToProps = {};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
