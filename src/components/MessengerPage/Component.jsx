import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { userType, chatType } from './propTypes';
import './styles.css';

const MessengerView = ({ user, chats }) => (
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
      <div className="chat__header">
        <div className="header__info">
          <img className="info__photo" src="https://randomuser.me/api/portraits/women/68.jpg" />
          <span className="info__name">Rosa Green</span>
          <span className="info__status">Online</span>
        </div>
      </div>
      <div className="chat-messages">
        <div className="chat-messages__message">
          <img className="message__user-photo" src="https://randomuser.me/api/portraits/women/68.jpg" />
          <div className="message__content">
            <div className="message__content-header">
              <span className="message__sender">Rosa Green</span>
              <span className="message__time">9:08 PM</span>
            </div>
            <span className="message__content-body">Sure.</span>
          </div>
        </div>
        <div className="chat-messages__message">
          <img className="message__user-photo" src="https://randomuser.me/api/portraits/men/85.jpg" />
          <div className="message__content">
            <div className="message__content-header">
              <span className="message__sender">Jionni Key</span>
              <span className="message__time">9:07 PM</span>
            </div>
            <span className="message__content-body">Fine. I was thinking about your suggest. What if I take the book for a few weeks?</span>
          </div>
        </div>
        <div className="chat-messages__message">
          <img className="message__user-photo" src="https://randomuser.me/api/portraits/women/68.jpg" />
          <div className="message__content">
            <div className="message__content-header">
              <span className="message__sender">Rosa Green</span>
              <span className="message__time">8:52 PM</span>
            </div>
            <span className="message__content-body">Hey, going well and how are you?</span>
          </div>
        </div>
        <div className="chat-messages__message">
          <div className="message__content">
            <span className="message__content-body">How is it going?</span>
          </div>
        </div>
        <div className="chat-messages__message">
          <img className="message__user-photo" src="https://randomuser.me/api/portraits/men/85.jpg" />
          <div className="message__content">
            <div className="message__content-header">
              <span className="message__sender">Jionni Key</span>
              <span className="message__time">8:47 PM</span>
            </div>
            <span className="message__content-body">Hi</span>
          </div>
        </div>
      </div>
      <div className="chat__form">
        <input className="form__text-input" type="text" placeholder="Write a message..." />
        <button type="button" className="form__send-button" />
      </div>
    </div>
  </div>
);

MessengerView.propTypes = {
  user: userType.isRequired,
  chats: PropTypes.arrayOf(chatType).isRequired,
};

export default MessengerView;
