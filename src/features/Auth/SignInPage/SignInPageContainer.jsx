import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import validate from '../utils/validate';

import AuthForm from '../components/AuthForm';
import WithBackground from '../components/WithBackground';

class SignInPageContainer extends PureComponent {
  static propTypes = {
    handleSignIn: PropTypes.func.isRequired,
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <WithBackground>
        <AuthForm
          title="Sign in"
          description="Please sign in into account or create new one."
          validate={validate}
          onSubmit={handleSignIn}
          submitButtonText="Enter"
        />
      </WithBackground>
    );
  }
}

const mapDispatchToProps = {
  handleSignIn: signIn,
};

export default connect(null, mapDispatchToProps)(SignInPageContainer);
