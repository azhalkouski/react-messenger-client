import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './styles.css';

export default function AuthFormView(props) {
  const {
    description,
    isValid,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    submitButtonText,
    onSubmit,
    onKeyPress,
    error,
  } = props;

  return (
    <div className="auth-form">
      <p className="description">{description}</p>
      <div className="auth-form__inputs">
        <TextField
          data-auth-form-text-field="email"
          error={error.message ? !!error.message.email : false}
          label="Email"
          value={email}
          onChange={onEmailChange}
          onKeyPress={onKeyPress}
        />
        <TextField
          data-auth-form-text-field="password"
          error={error.message ? !!error.message.password : false}
          margin="dense"
          type="password"
          label="Password"
          value={password}
          onChange={onPasswordChange}
          onKeyPress={onKeyPress}
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
  description: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }).isRequired,
};

AuthFormView.defaultProps = {
  description: '',
};
