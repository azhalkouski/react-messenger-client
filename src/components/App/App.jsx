import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';

const App = ({ children }) => (
  <div className="container">
    <CssBaseline />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
