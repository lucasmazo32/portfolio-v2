import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import qna from '../helpers/questions';
import '../assets/styles/Survey.scss';
import Question from '../components/Question';
import Answer from '../components/Answer';

export default function Survey() {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState(null);

  const history = useHistory();

  const handleOption = (e) => {
    setAnswer(e.target.innerHTML);
  };

  const handleNext = () => {
    console.log('Am I working');
    setQuestion((rn) => rn + 1);
    setAnswer(null);
  };

  const handleStop = () => {
    console.log('Am I working?');
    history.push('/');
  };

  return (
    <section className="Survey container-xl">
      <h1>{`${question}. ${qna[question].q}`}</h1>
      {
        answer
          ? <Answer ans={qna[question].ans[answer]} handleNext={handleNext} handleStop={handleStop} />
          : <Question handleOption={handleOption} qnaOptions={qna[question].op} />
      }
    </section>
  );
}
