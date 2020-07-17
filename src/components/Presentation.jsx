import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ReactComponent as Email } from '../assets/images/social/email.svg';
import { ReactComponent as Phone } from '../assets/images/social/phone.svg';
import { ReactComponent as Github } from '../assets/images/social/github.svg';
import { ReactComponent as Twitter } from '../assets/images/social/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/images/social/linkedin.svg';
import '../assets/styles/Presentation.scss';

export default function Presentation({ myRef }) {
  const history = useHistory();
  return (
    <section ref={myRef} className="Presentation container-xl">
      <div className="info-container">
        <h1>
          Hello, I am
          <br />
          {' '}
          a Front end Developer
        </h1>
        <p>
          Passionate about efficiency, consumer-centric products,
          generating a great user experience.
        </p>
        <span>Are you a recruiter?&nbsp;&nbsp;&nbsp;</span>
        <Button variant="contained" onClick={() => history.push('/recruiter')}>Click here</Button>
      </div>
      <div className="contact-container">
        <h2>Contact me</h2>
        <a className="a-text" href="tel: +57 3135364824">
          <Phone />
          {' '}
          313 536 4824
        </a>
        <a className="a-text" href="mailto: lucasmazo32@gmail.com">
          <Email />
          {' '}
          lucasmazo32@gmail.com
        </a>
        <div className="social">
          <span>Social: </span>
          <a className="icons github" href="https://github.com/lucasmazo32" aria-label="Github" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a className="icons linkedin" href="https://www.linkedin.com/in/lucasmazo/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a className="icons twitter" href="https://twitter.com/lucasmazo32" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter /></a>
        </div>
      </div>
    </section>
  );
}

Presentation.propTypes = {
  myRef: PropTypes.objectOf(PropTypes.any).isRequired,
};
