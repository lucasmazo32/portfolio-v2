import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../assets/styles/Presentation.scss';

export default function Presentation() {
  const history = useHistory();
  return (
    <section className="Presentation container-xl">
      <div className="info-container">
        <h1>
          Hello, I am
          <br />
          {' '}
          a Front end Developer
        </h1>
        <p>
          Passionate about efficiency, consumer-centric products,
          generating a great user experience.
        </p>
        {/* <span>Are you a recruiter?&nbsp;&nbsp;&nbsp;</span> */}
        <Button variant="contained" onClick={() => history.push('/recruiter')}>Are you a recruiter? Click here</Button>
      </div>
    </section>
  );
}
