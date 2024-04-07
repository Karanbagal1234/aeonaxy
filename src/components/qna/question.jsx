import React, { useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Question = ({ questions }) => {
  const [showAnswers, setShowAnswers] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index) => {
    const updatedAnswers = [...showAnswers];
    updatedAnswers[index] = !updatedAnswers[index];
    setShowAnswers(updatedAnswers);
  };

  return (
    <div className='w-full ml-2 p-9 bg-white border'>
      <ul className='flex flex-col justify-center'>
        {questions.map((question, index) => (
          <li key={index} className="m-2">
            <p className="flex items-center" onClick={() => toggleAnswer(index)}>
              <FontAwesomeIcon icon={faCircleQuestion} className="mr-2 text-[#f89e7d]" />
              {question.q}
            </p>
            {showAnswers[index] && (
              <p className="m-2 mx-12">
                Answer: {question.a}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
