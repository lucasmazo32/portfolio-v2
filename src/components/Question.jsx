import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export default function Question({ qnaOptions, handleOption }) {
  const options = qnaOptions ? (qnaOptions.map((option) => (
    <Button key={option} variant="contained" onClick={(e) => handleOption(e)}>{option}</Button>
  ))) : null;

  return (
    <section className="Question">
      <div className="options">{options}</div>
    </section>
  );
}

Question.propTypes = {
  qnaOptions: PropTypes.arrayOf(PropTypes.string),
  handleOption: PropTypes.func,
};

Question.defaultProps = {
  qnaOptions: null,
  handleOption: null,
};
