import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import Form from '../Form';

class SignInFormContainer extends PureComponent {
  static propTypes = {
    handleSignIn: PropTypes.func.isRequired,
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <Form
        title="Sign in"
        description="Please sign in into account or create new one."
        onSubmit={handleSignIn}
      />
    );
  }
}

const mapDispatchToProps = {
  handleSignIn: signIn,
};

export default connect(null, mapDispatchToProps)(SignInFormContainer);
