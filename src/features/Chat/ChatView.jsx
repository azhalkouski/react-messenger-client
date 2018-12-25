import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ChatForm from './ChatForm';

export default function ChatView(props) {
  const { messages, peer, onMessagePost } = props;

  return (
    <div className="messenger-page__chat">
      <div className="chat__header">
        <div className="header__info">
          <img className="info__photo" src={peer.photoUrl} />
          <span className="info__name">{peer.fullName}</span>
          <span className="info__status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
        </div>
      </div>
      <div className="chat-messages">
        {
          messages.map(message => (
            <div className="chat-messages__message" key={message._id}>
              <img className="message__user-photo" src={message.user.photoUrl} alt="user" />
              <div className="message__content">
                <div className="message__content-header">
                  <span className="message__sender">{message.user.fullName}</span>
                  <span className="message__time">{moment(message.created).format('h:mm A')}</span>
                </div>
                <span className="message__content-body">{message.text}</span>
              </div>
            </div>
          ))
        }
      </div>
      <ChatForm onSubmit={onMessagePost} />
    </div>
  );
}

ChatView.propTypes = {
  messages: PropTypes.array.isRequired,
  peer: PropTypes.object.isRequired,
  onMessagePost: PropTypes.func.isRequired,
};
