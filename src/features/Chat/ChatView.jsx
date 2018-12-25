import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function ChatView(props) {
  const { messages, peer } = props;

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
      <div className="chat__form">
        <input className="form__text-input" type="text" placeholder="Write a message..." />
        <button type="button" className="form__send-button" />
      </div>
    </div>
  );
}

ChatView.propTypes = {
  messages: PropTypes.array.isRequired,
  peer: PropTypes.object.isRequired,
};
