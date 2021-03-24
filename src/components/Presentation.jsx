import React from 'react';
import '../assets/styles/Presentation.scss';

export default function Presentation() {
  return (
    <section className="Presentation container-xl">
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
      </div>
    </section>
  );
}
