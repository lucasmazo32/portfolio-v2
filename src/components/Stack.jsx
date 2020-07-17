import React from 'react';
import '../assets/styles/Stack.scss';
import { ReactComponent as Front } from '../assets/images/skills/front.svg';
import { ReactComponent as Back } from '../assets/images/skills/back.svg';
import { ReactComponent as Skills } from '../assets/images/skills/skills.svg';

export default function Stack() {
  return (
    <section className="Stack container-xl">
      <h2>Skill-Set</h2>
      <span className="underline" />
      <div className="skills-container">
        <div className="single-skill front-end">
          <i><Front /></i>
          <h3>Front end</h3>
          <ul>
            <li>React / Redux</li>
            <li>JavaScript</li>
            <li>CSS / SASS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="single-skill back-end">
          <i><Back /></i>
          <h3>Back end</h3>
          <ul>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>PSQL</li>
          </ul>
        </div>
        <div className="single-skill tools">
          <i><Skills /></i>
          <h3>Tools</h3>
          <ul>
            <li>Github</li>
            <li>Git / Gitflow</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
