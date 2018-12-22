import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../../Logo';
import './styles.css';

const withVal = fn => e => fn(e.target.value);

export default function FormView(props) {
  const {
    title,
    description,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
  } = props;

  return (
    <div className="sign-up-page">
      <div className="sign-up-page__top-background" />
      <div className="sign-up-page__card">
        <div className="sign-up-page__card-header">
          <Logo />
        </div>
        <div className="sign-up-page__card-body">
          <h1 className="sign-up-page__card-title">{title}</h1>
          <p className="sign-up-page__card-description">{description}</p>
          <div className="sign-up-page__inputs">
            <TextField
              className="sign-up-page__input"
              label="Email"
              value={email}
              onChange={withVal(onEmailChange)}
            />
            <TextField
              className="sign-up-page__input"
              label="Password"
              value={password}
              onChange={withVal(onPasswordChange)}
            />
          </div>
        </div>
        <div className="sign-up-page__buttons">
          <Button variant="text" onClick={onSubmit}>Next</Button>
        </div>
      </div>
    </div>
  );
}

FormView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
