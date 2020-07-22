import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../assets/styles/Recruiter.scss';
import RecruiterNav from '../components/RecruiterNav';

export default function Recruiter() {
  const history = useHistory();
  return (
    <>
      <RecruiterNav time />
      <section className="Recruiter container-xl">
        <h1>Find out if I am the perfect fit for your company</h1>
        <Button variant="contained" onClick={() => history.push('/recruiter/survey')}>Start now!</Button>
      </section>
    </>
  );
}
