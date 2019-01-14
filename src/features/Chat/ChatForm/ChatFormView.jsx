import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function ChatFormView(props) {
  const { onSubmit } = props;
  const textInput = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(textInput.current.value);
    textInput.current.value = '';
  }

  return (
    <form className="chat__form" onSubmit={handleSubmit}>
      <input className="form__text-input" ref={textInput} type="text" placeholder="Write a message..." />
      <button type="button" className="form__submit-button" />
    </form>
  );
}

ChatFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
