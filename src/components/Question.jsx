import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import '../assets/styles/Question.scss';

export default function Question({
  qnaOptions, handleOption, qnaInp,
  qnaMC, stack, setMainTech, setYoe,
}) {
  const [technologies, setTechnologies] = useState(() => []);
  const [option, setOption] = useState(() => null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setMainTech(technologies);
  }, [technologies, setMainTech]);

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#F5F5F6',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#F5F5F6',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#F5F5F6',
        },
        '&:hover fieldset': {
          borderColor: '#F5F5F6',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#F5F5F6',
        },
      },
    },
  })(TextField);

  const handleClickOption = (_e, newFormat) => {
    setOption(newFormat);
    handleOption(newFormat);
  };

  const options = qnaOptions ? (qnaOptions.map((currOption) => (
    <ToggleButton key={currOption} variant="contained" value={currOption} onClick={handleClickOption}>{currOption}</ToggleButton>
  ))) : null;

  const handleMC = (_e, newFormats) => {
    setTechnologies(newFormats);
  };

  const handleInput = (e) => {
    if (e.target.value < 0) {
      setInputValue(0);
      setYoe(0);
    } else if (e.target.value > 15) {
      setInputValue(15);
      setYoe(15);
    } else {
      setInputValue(e.target.value);
      setYoe(Number(e.target.value));
    }
  };

  const renderMC = () => {
    if (qnaMC[0]) {
      if (stack === 'Front end') {
        return (
          <ToggleButtonGroup value={technologies} onChange={handleMC} aria-label="frameworks">
            { qnaMC[0].map((framework) => (
              <ToggleButton key={framework} value={framework} aria-label={framework}>
                {framework}
              </ToggleButton>
            )) }
          </ToggleButtonGroup>
        );
      }
      let count = -1;
      const groupName = ['Front end', 'Back end', 'Query Language'];
      return qnaMC.map((group) => {
        count += 1;
        return (
          <>
            <h4>{ groupName[count] }</h4>
            <ToggleButtonGroup value={technologies} onChange={handleMC} aria-label="frameworks">
              {
              group.map((framework) => (
                <ToggleButton key={framework} value={framework} aria-label={framework}>
                  {framework}
                </ToggleButton>
              ))
            }
            </ToggleButtonGroup>
          </>
        );
      });
    }
    return null;
  };

  return (
    <section className="Question">
      <div className="options">
        <ToggleButtonGroup value={option} aria-label="frameworks">
          {options}
        </ToggleButtonGroup>
      </div>
      <div className="multiple-choice">
        { qnaMC[0] ? <span className="multiple-text">This is a multiple choice question.</span> : null }
        { renderMC() }
      </div>
      { qnaInp ? (
        <div className="yoe">
          <CssTextField onChange={handleInput} value={inputValue} id="outlined-basic" type="number" label="Years of experience" variant="outlined" />
        </div>
      ) : null }
    </section>
  );
}

Question.propTypes = {
  qnaOptions: PropTypes.arrayOf(PropTypes.string),
  handleOption: PropTypes.func,
  stack: PropTypes.string,
  qnaMC: PropTypes.arrayOf(PropTypes.array),
  setMainTech: PropTypes.func.isRequired,
  setYoe: PropTypes.func.isRequired,
  qnaInp: PropTypes.bool,
};

Question.defaultProps = {
  qnaOptions: null,
  handleOption: null,
  stack: null,
  qnaMC: null,
  qnaInp: null,
};
