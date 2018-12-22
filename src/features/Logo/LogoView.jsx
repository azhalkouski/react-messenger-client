import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function LogoView(props) {
  const { theme } = props;

  return (
    <div className={`logo logo--${theme}`}>
      <div className="logo__icon" />
      <span className="logo__text">Messenger</span>
    </div>
  );
}

LogoView.propTypes = {
  theme: PropTypes.string,
};

LogoView.defaultProps = {
  theme: 'dark',
};
