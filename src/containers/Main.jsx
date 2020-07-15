import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Stack from '../components/Stack';
import '../assets/styles/Main.scss';

export default function Main() {
  return (
    <div className="Main">
      <Nav />
      <Contact />
      <Stack />
    </div>
  );
}
