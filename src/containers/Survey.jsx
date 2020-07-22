/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LinearProgress, Button } from '@material-ui/core';
import qna from '../helpers/questions';
import checkHelper from '../helpers/secondQ';
import '../assets/styles/Survey.scss';
import Question from '../components/Question';
import monthsFromStart from '../helpers/yearsFromNov';
import Answer from '../components/Answer';
import RecruiterNav from '../components/RecruiterNav';

export default function Survey() {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [stack, setStack] = useState(null);
  const [framew, setFrameW] = useState([]);
  const [yoe, setYoe] = useState(null);

  useEffect(() => {
    if (framew.length === 0) {
      setAnswer(null);
    } else {
      setAnswer(checkHelper(qna[question].check, framew, qna[question].ans));
    }
  }, [framew]);

  useEffect(() => {
    if (monthsFromStart().months / 12 > yoe) {
      setAnswer({ text: qna[question].ans[0], contact: true, now: 'stop' });
    } else if ((monthsFromStart().months / 12) + 2 > yoe) {
      setAnswer({
        text: `Are you sure you need ${yoe} years of experience? Maybe a highly motivated developer with ${monthsFromStart().text} of experience, and with the right coaching, can be a better fit!`,
        conf: true,
      });
    } else {
      setAnswer({ text: qna[question].ans[2], now: 'stop' });
    }
  }, [yoe]);

  const confRejected = () => {
    setAnswer({ text: qna[question].ans[2], now: 'stop' });
  };

  const confAccepted = () => {
    setAnswer({ text: qna[question].ans[1], now: 'stop', contact: true });
  };

  const history = useHistory();

  const handleOption = (e) => {
    setAnswer(qna[question].ans[e]);
    if (question === 1) {
      setStack(e);
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
        <Question setYoe={setYoe} qnaInp={qna[question].inp} handleOption={handleOption} qnaOptions={qna[question].op} qnaMC={[qna[question].mcfront, qna[question].mcback, qna[question].mcql]} stack={stack} setMainTech={setFrameW} />
        {
          answer
            ? <Answer ans={answer} confR={confRejected} confA={confAccepted} currExp={monthsFromStart().text} handleNext={handleNext} handleStop={handleStop} />
            : <Button variant="contained" color="secondary" disabled>Next</Button>
        }
      </section>
    </>
  );
}
