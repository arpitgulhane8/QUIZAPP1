import React, { useState, useEffect } from 'react';

const DisplayQuiz = ({ question, options, currentIndex, totalQuestions, onNext }) => {
  const [timer, setTimer] = useState(10);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Countdown timer
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="question-number">{`${currentIndex + 1}/${totalQuestions}`}</span>
        <span className="timer">{`${timer}s`}</span>
      </div>
      <div className="question-text">
        {question}
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next-button"
        onClick={onNext}
        disabled={selectedOption === null}
      >
        NEXT
      </button>
    </div>
  );
};

export default DisplayQuiz;
