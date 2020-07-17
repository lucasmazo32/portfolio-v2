import React, { useState } from 'react';
import Nav from '../components/Nav';
import Presentation from '../components/Presentation';
import Stack from '../components/Stack';
import '../assets/styles/Main.scss';
import Projects from '../components/Projects';

export default function Main() {
  const [name, setName] = useState('');
  const [myRef, setmyRef] = useState(React.createRef());

  window.onscroll = () => {
    if (myRef.current) {
      if (myRef.current.offsetHeight + myRef.current.offsetTop < window.scrollY) {
        setName(' open');
        setmyRef(React.createRef());
      } else {
        setName('');
        setmyRef(React.createRef());
      }
    }
  };
  return (
    <div className="Main">
      <Nav myClass={name} />
      <Presentation myRef={myRef} />
      <Stack />
      <Projects />
    </div>
  );
}
