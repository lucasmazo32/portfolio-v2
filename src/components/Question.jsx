import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import '../assets/styles/Question.scss';

export default function Question({
  qnaOptions, handleOption,
  qnaMC, stack,
}) {
  const [technologies, setTechnologies] = useState([]);

  const options = qnaOptions ? (qnaOptions.map((option) => (
    <Button key={option} variant="contained" onClick={(e) => handleOption(e)}>{option}</Button>
  ))) : null;

  const renderMC = () => {
    if (qnaMC[0]) {
      if (stack === 'Front end') {
        return qnaMC[0].map((framework) => (
          <ToggleButton key={framework} value={framework} aria-label={framework}>
            {framework}
          </ToggleButton>
        ));
      }
      return null;
    }
    return null;
  };

  const handleMC = (e) => {
    let frwk;
    if (e.target.value) {
      frwk = e.target.value;
    } else {
      frwk = e.target.innerHTML;
    }
    if (technologies.includes(frwk)) {
      const ind = technologies.indexOf(frwk);
      setTechnologies((tech) => {
        tech.splice(ind, 1);
        return tech;
      });
    } else {
      setTechnologies((tech) => {
        tech.push(frwk);
        return tech;
      });
    }
  };

  return (
    <section className="Question">
      <div className="options">
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          {options}
        </ButtonGroup>
      </div>
      <div className="multiple-choice">
        <ToggleButtonGroup onChange={handleMC} aria-label="text formatting">
          { renderMC() }
        </ToggleButtonGroup>
      </div>
    </section>
  );
}

Question.propTypes = {
  qnaOptions: PropTypes.arrayOf(PropTypes.string),
  handleOption: PropTypes.func,
  stack: PropTypes.string,
  qnaMC: PropTypes.arrayOf(PropTypes.array),
};

Question.defaultProps = {
  qnaOptions: null,
  handleOption: null,
  stack: null,
  qnaMC: null,
};
