import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function WithBackground(props) {
  const { children } = props;

  return (
    <div className="log-in-page">
      <div className="log-in-page__top-background" />
      <div className="log-in-page__content">
        {children}
      </div>
    </div>
  );
}

WithBackground.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
