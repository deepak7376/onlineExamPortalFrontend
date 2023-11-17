// ResultPage.js
import React from 'react';

function ResultPage({ score, questions }) {
  return (
    <div>
      <h3>Result Page</h3>
      <p>Score: {score}/{questions.length}</p>
      <h4>Correct Answers:</h4>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            Question {question.id}: {question.correctAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;
