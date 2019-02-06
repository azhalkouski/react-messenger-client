import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { userType } from './propTypes';
import './styles.css';

export default function CreateChatView(props) {
  const { users } = props;

  return (
    <div className="create-chat">
      {users.map(user => (
        <div className="create-chat__user" key={user._id}>
          <img className="create-chat__user-photo" src={user.photoUrl} alt="user" />
          <div className="create-chat__user-info">
            <span className="create-chat__user-name">{user.fullName}</span>
            <span className="create-chat__user-email">{user.email}</span>
          </div>
          <Button className="create-chat__button" variant="text" onClick={() => {}}>
            Create chat
          </Button>
        </div>
      ))}
    </div>
  );
}

CreateChatView.propTypes = {
  users: PropTypes.arrayOf(userType).isRequired,
};
