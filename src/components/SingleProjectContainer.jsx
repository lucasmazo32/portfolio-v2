import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/SingleProjectContainer.scss';

export default function SingleProjectContainer({
  title, portrait,
  technologies, webpage,
  description, image, from, to,
}) {
  const built = (technologies.map((element) => (
    <span key={element}>
      &nbsp;
      {element}
    </span>
  )));

  return (
    <section className="SingleProjectContainer">
      <h3>{title}</h3>
      <div className={portrait ? 'info portrait' : 'info'}>
        <div className="description">
          <span className="timespan">{`${from} - ${to}`}</span>
          <p>{description}</p>
          <div className="built-with">
            <span>Technologies:&nbsp;</span>
            {built}
          </div>
          <div className="links">
            <a href={webpage} target="_blank" rel="noopener noreferrer">
              <img className="image" src={image} alt={title} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

SingleProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  webpage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  portrait: PropTypes.bool,
};

SingleProjectContainer.defaultProps = {
  portrait: false,
};
