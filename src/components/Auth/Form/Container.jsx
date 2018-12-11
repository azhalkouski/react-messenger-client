import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormComponent from './Component';

class Form extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
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
    const { title, description } = this.props;

    return (
      <FormComponent
        title={title}
        description={description}
        email={email}
        password={password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default Form;
