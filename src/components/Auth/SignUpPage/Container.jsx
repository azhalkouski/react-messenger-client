import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import SignUpPageComponent from './Component';

class SignUpPageContainer extends PureComponent {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    handleSignUp(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <SignUpPageComponent
        email={email}
        password={password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  handleSignUp: signUp,
};

export default connect(null, mapDispatchToProps)(SignUpPageContainer);
