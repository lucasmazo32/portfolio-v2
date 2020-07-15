import React from 'react';
import { ReactComponent as Email } from '../assets/images/email.svg';
import { ReactComponent as Phone } from '../assets/images/phone.svg';
import '../assets/styles/Contact.scss';

export default function Contact() {
  return (
    <section className="Contact">
      <div className="name-container">
        <h2>Lucas Mazo</h2>
        <h3>Front-End Developer</h3>
      </div>
      <div className="info-container">
        <h2>Contact me</h2>
        <a href="tel: +57 3135364824">
          <Phone />
          313 536 4824
        </a>
        <a href="mailto: lucasmazo32@gmail.com">
          <Email />
          lucasmazo32@gmail.com
        </a>
      </div>
    </section>
  );
}
