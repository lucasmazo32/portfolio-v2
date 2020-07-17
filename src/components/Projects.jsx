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
      img={project.image}
      builtWith={project.builtWith}
      live={project.refs[0]}
      github={project.refs[1]}
      description={project.desc}
    />
  ));
  return (
    <section className="Projects container-xl">
      <h2>Projects</h2>
      <span className="underline" />
      {projectContainers}
    </section>
  );
}
