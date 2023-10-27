import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Card from 'react-bootstrap/Card';

function ExamPage() {
  const { examId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const dummyQuestions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      text: 'Who wrote the play "Hamlet"?',
      choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'George Orwell'],
      correctAnswer: 'William Shakespeare',
    },
  ];

  useEffect(() => {
    // In a real application, you would fetch questions from your backend based on the examId.
    // For this example, we'll use the sample dummy questions.
    setQuestions(dummyQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId]);

  const handleAnswerChange = (questionId, selectedChoice) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedChoice,
    });
  };

  const handleSubmission = () => {
    // Implement your submission logic here.
    // You can compare selected answers with correct answers and calculate the score.
    setSubmitted(true);
  };

  return (
    <Layout>
      <div>
        <h3>Exam {examId} Questions</h3>
        <form>
          {questions.map((question) => (
            <Card key={question.id} style={{ marginBottom: '20px' }}> {/* Add margin-bottom */}
              <Card.Body>
                <Card.Title>Question {question.id}</Card.Title>
                <Card.Text>{question.text}</Card.Text>
                {question.choices.map((choice, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={choice}
                      checked={selectedAnswers[question.id] === choice}
                      onChange={() => handleAnswerChange(question.id, choice)}
                    />
                    <label>{choice}</label>
                  </div>
                ))}
              </Card.Body>
            </Card>
          ))}
        </form>
        {submitted ? (
          <p>Answers submitted. Display score or feedback here.</p>
        ) : (
          <button onClick={handleSubmission}>Submit Answers</button>
        )}
      </div>
    </Layout>
  );
}

export default ExamPage;
