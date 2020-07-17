import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Email } from '../assets/images/social/email.svg';
import { ReactComponent as Phone } from '../assets/images/social/phone.svg';
import { ReactComponent as Github } from '../assets/images/social/github.svg';
import { ReactComponent as Twitter } from '../assets/images/social/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/images/social/linkedin.svg';
import '../assets/styles/Nav.scss';

export default function Nav({ myClass }) {
  return (
    <nav className={`Nav${myClass}`}>
      <div className="contact">
        <a className="a-text" href="tel: +57 3135364824">
          <Phone />
        </a>
        <a className="a-text" href="mailto: lucasmazo32@gmail.com">
          <Email />
        </a>
      </div>
      <h2>Lucas Mazo</h2>
      <div className="social">
        <a className="icons github" href="https://github.com/lucasmazo32" aria-label="Github" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a className="icons linkedin" href="https://www.linkedin.com/in/lucasmazo/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a className="icons twitter" href="https://twitter.com/lucasmazo32" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter /></a>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  myClass: PropTypes.string.isRequired,
};
