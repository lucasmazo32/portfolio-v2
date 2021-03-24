import React from 'react';
import '../assets/styles/Projects.scss';
import projects from '../helpers/projects';
import SingleProjectContainer from './SingleProjectContainer';

export default function Projects() {
  const projectContainers = projects.map((project) => (
    <SingleProjectContainer
      key={project.title}
      title={project.title}
      portrait={project.portrait}
      technologies={project.builtWith}
      webpage={project.refs[0]}
      description={project.desc}
      image={project.image}
      from={project.from}
      to={project.to}
    />
  ));
  return (
    <section className="Projects container-xl">
      <h2>Experience</h2>
      <span className="underline" />
      {projectContainers}
    </section>
  );
}
