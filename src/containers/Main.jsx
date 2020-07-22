import React from 'react';
import Nav from '../components/Nav';
import Presentation from '../components/Presentation';
import Stack from '../components/Stack';
import '../assets/styles/Main.scss';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Main() {
  return (
    <div className="Main">
      <Nav />
      <Presentation />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}
