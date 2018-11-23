import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}
