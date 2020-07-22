import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Contact from './Contact';
import '../assets/styles/Answer.scss';

export default function Answer({
  ans, handleNext, confR,
  handleStop, confA,
}) {
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
      <h4>{ ans.tech ? `Willing to learn: ${ans.tech.join(', ')}` : null}</h4>
      { ans.conf ? (
        <div className="confirmation">
          <Button variant="contained" color="secondary" onClick={() => confA()}>I am willing to give you a chance!</Button>
          <Button variant="contained" color="secondary" onClick={() => confR()}>Sorry, I need the experience</Button>
        </div>
      ) : null}
      { ans.contact ? <Contact /> : null }
      { ans.now ? renderButton() : null }
    </section>
  );
}

Answer.propTypes = {
  ans: PropTypes.objectOf(PropTypes.any).isRequired,
  handleNext: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  confA: PropTypes.func.isRequired,
  confR: PropTypes.func.isRequired,
};
