import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './styles.css';

export default function MessagesView(props) {
  const { messages } = props;

  return (
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
  );
}

MessagesView.propTypes = {
  messages: PropTypes.array,
};

MessagesView.defaultProps = {
  messages: [],
};
