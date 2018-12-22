import React from 'react';

const ChatView = () => (
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
);

export default ChatView;
