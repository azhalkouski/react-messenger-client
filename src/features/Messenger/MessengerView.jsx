import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import enStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import Link from 'react-router-dom/Link';
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
          <img className="profile__image" src={user.photoUrl} />
          <span className="profile__name">{user.fullName}</span>
          <span className="profile__email">{user.email}</span>
        </div>
        <div className="sidebar__user-chats">
          <div className="user-chats__actions">
            <input className="user-chats__actions-search" type="text" placeholder="Search..." />
            <Link to="/messenger/new" className="user-chats__actions-create-chat" />
          </div>
          <div className="user-chats__chats-list">

            {chats.map(chat => (
              <Link to={`/messenger/${chat._id}`} className="chats-list__chat-item" key={chat._id}>
                <div className="chat-item__user">
                  <img
                    className="user__image"
                    src={chat.users.filter(peer => peer._id !== user._id)[0].photoUrl}
                  />
                  <div className="user__status" />
                </div>
                <div className="chat-item__message-preview">
                  <span className="message-preview__user">
                    {chat.users.find(chatUser => chatUser._id !== user._id).fullName}
                  </span>
                  <span className="message-preview__last-message">
                    {chat.lastMessage ? chat.lastMessage.text : 'No messages yet.'}
                  </span>
                </div>
                {
                  chat.lastMessage && (
                    <span className="chat-item__last-message-date">
                      <TimeAgo
                        date={chat.lastMessage.created}
                        formatter={buildFormatter(enStrings)}
                      />
                    </span>
                  )
                }
              </Link>
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
