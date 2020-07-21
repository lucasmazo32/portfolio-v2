/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LinearProgress, Button } from '@material-ui/core';
import qna from '../helpers/questions';
import '../assets/styles/Survey.scss';
import Question from '../components/Question';
import Answer from '../components/Answer';
import RecruiterNav from '../components/RecruiterNav';

export default function Survey() {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [stack, setStack] = useState(null);

  const history = useHistory();

  const handleOption = (e) => {
    setAnswer(e.target.innerHTML);
    if (question === 1) {
      setStack(e.target.innerHTML);
    }
  };

  const handleNext = () => {
    setQuestion((rn) => rn + 1);
    setAnswer(null);
  };

  const handleStop = () => {
    history.push('/');
  };

  return (
    <>
      <RecruiterNav />
      <section className="Survey container-fluid">
        <div className="feedback">
          <span>{`Question ${question} out of 3`}</span>
          <LinearProgress variant="determinate" value={(question / 3) * 100} />
        </div>
        <h1>{qna[question].q}</h1>
        <Question handleOption={handleOption} qnaOptions={qna[question].op} qnaMC={[qna[question].mcfront, qna[question].mcback, qna[question].mcql]} stack={stack} />
        {
          answer
            ? <Answer ans={qna[question].ans[answer]} handleNext={handleNext} handleStop={handleStop} />
            : <Button variant="contained" color="secondary" disabled>Next</Button>
        }
      </section>
    </>
  );
}
