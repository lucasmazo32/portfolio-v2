import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/RecruiterNav.scss';

export default function RecruiterNav({ time }) {
  return (
    <nav className="RecruiterNav container-fluid">
      <h3 className="sc-font name">Lucas Mazo</h3>
      <h2 className="sc-font text">Recruiter Survey</h2>
      { time ? (
        <section className="survey-duration container-xl">
          <div className="questions">
            <h3 className="sc-font">3</h3>
            <span className="sc-font">questions</span>
          </div>
          <div className="time">
            <h3 className="sc-font">1</h3>
            <span className="sc-font">minute</span>
          </div>
        </section>
      ) : null }
    </nav>
  );
}

RecruiterNav.propTypes = {
  time: PropTypes.bool,
};

RecruiterNav.defaultProps = {
  time: false,
};
