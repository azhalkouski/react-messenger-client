import React from 'react';
import Logo from '../Logo';
import './styles.css';

const MessengerPage = () => (
  <div className="messenger-page">
    <div className="messenger-page__sidebar">
      <div className="sidebar__header">
        <Logo theme="light" />
      </div>
      <div className="sidebar__profile">
        <img className="profile__image" src="https://randomuser.me/api/portraits/men/85.jpg" />
        <span className="profile__name">Jionni Key</span>
        <span className="profile__email">jionni.key@gmail.com</span>
      </div>
      <div className="sidebar__user-chats">
        <div className="user-chats__search">
          <input className="user-chats__search-input" type="text" placeholder="Search..." />
        </div>
        <div className="user-chats__chats-list">
          <div className="chats-list__chat-item">
            <div className="chat-item__user">
              <img className="user__image" src="https://randomuser.me/api/portraits/men/83.jpg" />
              <div className="user__status" />
            </div>
            <div className="chat-item__message-preview">
              <span className="message-preview__user">Ernesto Forbes</span>
              <span className="message-preview__last-message">Hello, how is it going?</span>
            </div>
            <span className="chat-item__last-message-date">Yesterday</span>
          </div>
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
      <div className="chat__messages">
        <div className="message message_type_outgoing">
          <div className="message__message-body">
            <div className="message-body__content message-body_variant-outgoing">Some text</div>
            <span className="message__time">8:48 PM</span>
          </div>
        </div>
        <div className="message message_type_incoming">
          <div className="message__message-body">
            <div className="message-body__content message-body_variant-incoming">Some text</div>
            <span className="message__time">8:47 PM</span>
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

export default MessengerPage;
