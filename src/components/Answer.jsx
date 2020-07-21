import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import '../assets/styles/Answer.scss';

export default function Answer({ ans, handleNext, handleStop }) {
  const renderButton = (() => {
    switch (ans.now) {
      case 'next':
        return <Button variant="contained" color="secondary" onClick={() => handleNext()}>Next question</Button>;
      case 'stop':
        return <Button variant="contained" color="secondary" onClick={() => handleStop()}>Go to main page</Button>;
      default:
        return null;
    }
  });

  return (
    <section className="Answer">
      <h4>{ ans ? ans.text : null }</h4>
      { ans ? renderButton() : null }
    </section>
  );
}

Answer.propTypes = {
  ans: PropTypes.objectOf(PropTypes.string).isRequired,
  handleNext: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
};
