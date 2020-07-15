import React from 'react';
import '../assets/styles/Stack.scss';
import SingleProjectContainer from './SingleProjectContainer';

export default function Stack() {
  return (
    <section className="Stack">
      <h2>Stack</h2>
      <div className="button-container">
        <button className="btn btn-rr" type="button">
          <span>React/Redux</span>
        </button>
        <button className="btn btn-ruby" type="button">
          <span>Ruby on Rails</span>
        </button>
        <button className="btn btn-js" type="button">
          <span>JavaScript</span>
        </button>
      </div>
      <SingleProjectContainer />
    </section>
  );
}
