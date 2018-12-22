import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { userType, chatType } from './propTypes';
import './styles.css';

export default function MessengerView(props) {
  const { user, chats, children } = props;

  return (
    <div className="messenger-page">
      <div className="messenger-page__sidebar">
        <div className="sidebar__header">
          <Logo theme="light" />
        </div>
        <div className="sidebar__profile">
          <img className="profile__image" src="https://randomuser.me/api/portraits/men/85.jpg" />
          <span className="profile__name">{user.email}</span>
          <span className="profile__email">{user.email}</span>
        </div>
        <div className="sidebar__user-chats">
          <div className="user-chats__search">
            <input className="user-chats__search-input" type="text" placeholder="Search..." />
          </div>
          <div className="user-chats__chats-list">

            {chats.map(chat => (
              <div className="chats-list__chat-item" key={chat.id}>
                <div className="chat-item__user">
                  <img className="user__image" src="https://randomuser.me/api/portraits/women/68.jpg" />
                  <div className="user__status" />
                </div>
                <div className="chat-item__message-preview">
                  <span className="message-preview__user">{chat.users.find(chatUser => chatUser.id !== user.id).email}</span>
                  <span className="message-preview__last-message">{chat.lastMessage || 'Empty...'}</span>
                </div>
                <span className="chat-item__last-message-date">{chat.lastMessageDate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="messenger-page__chat">
        { children }
      </div>
    </div>
  );
}

MessengerView.propTypes = {
  user: userType.isRequired,
  chats: PropTypes.arrayOf(chatType).isRequired,
  children: PropTypes.any,
};

MessengerView.defaultProps = {
  children: null,
};
