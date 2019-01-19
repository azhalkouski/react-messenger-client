import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AuthForm from './components/AuthForm';
import Logo from '../Logo';
import { getSignUpErrors, getSignInErrors } from './selectors';
import { signIn, signUp } from './actions';
import validate from './utils/validate';

import './styles.css';

const getType = index => index === 0 ? 'signin' : 'signup';
const getIndex = type => !type || type === 'signin' ? 0 : 1;

class AuthContainer extends React.PureComponent {
  static propTypes = {
    handlePush: PropTypes.func.isRequired,
    handleSignIn: PropTypes.func.isRequired,
    handleSignUp: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    signUpError: PropTypes.object.isRequired,
    signInError: PropTypes.object.isRequired,
  }

  handleChangeType = (e, type) => {
    const { handlePush } = this.props;
    handlePush(`/auth/${type}`);
  }

  handleChangeIndex = index =>
    this.handleChangeType(null, getType(index));

  render() {
    const {
      match,
      signUpError,
      signInError,
      handleSignIn,
      handleSignUp,
    } = this.props;
    const { type = 'signin' } = match.params;

    return (
      <div className="auth">
        <div className="auth__top-background" />
        <div className="auth__card">
          <div className="auth__card-header">
            <Logo />
          </div>
          <Tabs centered className="auth__tabs" onChange={this.handleChangeType} value={type}>
            <Tab className="auth__tab" label="Sign in" value="signin" />
            <Tab className="auth__tab" label="Sign up" value="signup" />
          </Tabs>
          <SwipeableViews
            slideStyle={{ display: 'flex', justifyContent: 'center' }}
            index={getIndex(type)}
            onChangeIndex={this.handleChangeIndex}
          >
            <AuthForm
              description="Please sign in into account or create new one."
              error={signInError}
              validate={validate}
              onSubmit={handleSignIn}
              submitButtonText="Enter"
            />
            <AuthForm
              description="Please create an account or login into the existing one."
              error={signUpError}
              validate={validate}
              onSubmit={handleSignUp}
              submitButtonText="Create"
            />
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpError: getSignUpErrors(state),
  signInError: getSignInErrors(state),
});

const mapDispatchToProps = {
  handlePush: push,
  handleSignIn: signIn,
  handleSignUp: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
