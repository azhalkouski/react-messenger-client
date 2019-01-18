import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './styles.css';

export default function AuthFormView(props) {
  const {
    title,
    description,
    isValid,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    submitButtonText,
    onSubmit,
  } = props;

  return (
    <div className="auth-form">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="auth-form__inputs">
        <TextField
          data-auth-form-text-field="email"
          label="Email"
          value={email}
          onChange={onEmailChange}
        />
        <TextField
          data-auth-form-text-field="password"
          margin="dense"
          type="password"
          label="Password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="auth-form__buttons">
        <Button variant="text" onClick={onSubmit} disabled={!isValid}>
          {submitButtonText}
        </Button>
      </div>
    </div>
  );
}

AuthFormView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AuthFormView.defaultProps = {
  title: '',
  description: '',
};
