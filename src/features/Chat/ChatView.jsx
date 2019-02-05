import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ChatMessages from './components/Messages';
import ChatForm from './ChatForm';
import './styles.css';

class ChatView extends Component {
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
      <div className="chat">
        <div className="chat__header">
          <div className="header__info">
            <img className="info__photo" src={peer.photoUrl} />
            <span className="info__name">{peer.fullName}</span>
            <span className="info__status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
          </div>
        </div>
        <div
          className={cn({
            'chat-messages-wrapper': true,
            'chat-messages-wrapper--no-messages': messages.length === 0,
          })}
          ref={this.messagesRef}
        >
          {
            messages.length > 0
              ? <ChatMessages messages={messages} />
              : 'No messages yet'
          }
        </div>
        <ChatForm onSubmit={onMessagePost} />
      </div>
    );
  }
}

export default ChatView;
