import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import validate from '../utils/validate';

import AuthForm from '../components/AuthForm';
import WithBackground from '../components/WithBackground';

class SignUpPageContainer extends PureComponent {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
  }

  render() {
    const { handleSignUp } = this.props;

    return (
      <WithBackground>
        <AuthForm
          title="Sign up"
          description="Please create an account or login into the existing one."
          validate={validate}
          onSubmit={handleSignUp}
          submitButtonText="Create"
        />
      </WithBackground>
    );
  }
}

const mapDispatchToProps = {
  handleSignUp: signUp,
};

export default connect(null, mapDispatchToProps)(SignUpPageContainer);
