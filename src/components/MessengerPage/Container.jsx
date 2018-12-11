import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Component from './Component';

class Messenger extends PureComponent {
  render() {
    return <Component />;
  }
}

export default connect(null)(Messenger);
