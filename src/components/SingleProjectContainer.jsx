import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Page } from '../assets/images/other/page.svg';
import { ReactComponent as Github } from '../assets/images/social/github.svg';
import '../assets/styles/SingleProjectContainer.scss';

export default function SingleProjectContainer({
  title, portrait, img,
  builtWith, live, github,
  description,
}) {
  const built = (builtWith.map((element) => (
    <span key={element}>
      &nbsp;
      {element}
    </span>
  )));

  return (
    <section className="SingleProjectContainer">
      <h3>{ title }</h3>
      <div className={portrait ? 'info portrait' : 'info'}>
        <div className="image" style={{ backgroundImage: `url(${img})` }} />
        <div className="description">
          <p>{description}</p>
          <div className="built-with">
            <span>Built with:&nbsp;</span>
            { built }
          </div>
          <div className="links">
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live version
              <Page />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              Repo
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

SingleProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  builtWith: PropTypes.arrayOf(PropTypes.string).isRequired,
  portrait: PropTypes.bool,
};

SingleProjectContainer.defaultProps = {
  portrait: false,
};
