import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../Logo';
import './styles.css';

export default () => (
  <div className="sign-up-page">
    <div className="sign-up-page__top-background" />
    <div className="sign-up-page__card">
      <div className="sign-up-page__card-header">
        <Logo />
      </div>
      <div className="sign-up-page__card-body">
        <h1 className="sign-up-page__card-title">Sign up</h1>
        <p className="sign-up-page__card-description">
          Create an account or login into the existing one.
        </p>
        <div className="sign-up-page__inputs">
          <TextField className="sign-up-page__input" label="Email" />
          <TextField className="sign-up-page__input" label="Password" />
        </div>
      </div>
      <div className="sign-up-page__buttons">
        <Button variant="text">Next</Button>
      </div>
    </div>
  </div>
);
