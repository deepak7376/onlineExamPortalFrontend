import React from 'react';
import Card from 'react-bootstrap/Card';

function Question({ question, selectedAnswer, onAnswerChange }) {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>Question {question.id}</Card.Title>
        <Card.Text>{question.text}</Card.Text>
        {question.choices.map((choice, index) => (
          <div key={index}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => onAnswerChange(question.id, choice)}
            />
            <label>{choice}</label>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Question;
