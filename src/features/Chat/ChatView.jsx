import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ChatMessages from './components/Messages';
import ChatForm from './ChatForm';

class ChatView extends PureComponent {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    peer: PropTypes.object.isRequired,
    onMessagePost: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.messagesRef = React.createRef();
  }

  componentDidUpdate() {
    const { scrollHeight } = this.messagesRef.current;
    ReactDOM.findDOMNode(this.messagesRef.current).scrollTop = scrollHeight;
  }

  render() {
    const { messages, peer, onMessagePost } = this.props;

    return (
      <div className="messenger-page__chat">
        <div className="chat__header">
          <div className="header__info">
            <img className="info__photo" src={peer.photoUrl} />
            <span className="info__name">{peer.fullName}</span>
            <span className="info__status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
          </div>
        </div>
        <div className="chat-messages-wrapper" ref={this.messagesRef}>
          <ChatMessages messages={messages} />
        </div>
        <ChatForm onSubmit={onMessagePost} />
      </div>
    );
  }
}

export default ChatView;
