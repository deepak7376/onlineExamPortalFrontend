import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';


function ExamPage() {
  const { examId } = useParams(); // Get the examId from the route parameters
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Sample dummy multiple-choice questions
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
      <h1>Exam Page</h1>
      <h2>Exam {examId} Questions</h2>
      <form>
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.text}</p>
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
          </div>
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
