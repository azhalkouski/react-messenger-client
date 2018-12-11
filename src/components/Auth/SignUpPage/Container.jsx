import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import Form from '../Form';

class SignUpPage extends PureComponent {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
  }

  render() {
    const { handleSignUp } = this.props;

    return (
      <Form
        title="Sign up"
        description="Please create an account or login into the existing one."
        onSubmit={handleSignUp}
      />
    );
  }
}

const mapDispatchToProps = {
  handleSignUp: signUp,
};

export default connect(null, mapDispatchToProps)(SignUpPage);
