import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AuthFormView from './AuthFormView';

const withVal = fn => e => fn(e.target.value);

class FormContainer extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: '',
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
    const { onSubmit } = this.props;

    onSubmit(email, password);
  }

  render() {
    const { email, password } = this.state;
    const {
      title,
      description,
      submitButtonText,
      validate,
    } = this.props;

    return (
      <AuthFormView
        title={title}
        description={description}
        isValid={validate(email, password)}
        email={email}
        password={password}
        onEmailChange={withVal(this.handleEmailChange)}
        onPasswordChange={withVal(this.handlePasswordChange)}
        submitButtonText={submitButtonText}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormContainer;
