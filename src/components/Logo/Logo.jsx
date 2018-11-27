/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Logo = ({ theme = 'dark' }) => (
  <div className={`logo logo--${theme}`}>
    <div className="logo__icon" />
    <span className="logo__text">Messenger</span>
  </div>
);

Logo.propTypes = {
  theme: PropTypes.string,
};

export default Logo;
