import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AuthFormView from './AuthFormView';
import withVal from '../../utils/withVal';

class FormContainer extends PureComponent {
  static propTypes = {
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string.isRequired,
    error: PropTypes.shape({
      message: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
      }),
    }).isRequired,
  }

  static defaultProps = {
    description: '',
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
    const { validate, onSubmit } = this.props;

    if (validate(email, password)) {
      onSubmit(email, password);
    }
  }

  handleKeyPress = (e) => {
    if (e.which && e.which === 13) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  render() {
    const { email, password } = this.state;
    const {
      description,
      submitButtonText,
      validate,
      error,
    } = this.props;

    return (
      <AuthFormView
        description={description}
        isValid={validate(email, password)}
        email={email}
        password={password}
        error={error}
        onEmailChange={withVal(this.handleEmailChange)}
        onPasswordChange={withVal(this.handlePasswordChange)}
        submitButtonText={submitButtonText}
        onSubmit={this.handleSubmit}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default FormContainer;
