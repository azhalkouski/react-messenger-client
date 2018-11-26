import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
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
      <div className="container">
        <CssBaseline />
        { children }
      </div>
    );
  }
}
