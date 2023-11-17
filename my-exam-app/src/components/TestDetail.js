// TestDetail.js
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import Question from './Question';
import ResultPage from './ResultPage';

function TestDetail() {
  const { examId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/questions/?exam_id=${examId}`)
      .then((response) => {
        console.log(response.data);
        const parsedQuestions = response.data.map((question) => ({
          id: question.id,
          text: question.question_text,
          choices: JSON.parse(question.option_text.replace(/'/g, '"')),
          correctAnswer: question.correct_answer.replace(/'/g, ''),
        }));
        setQuestions(parsedQuestions);
      })
      .catch((error) => {
        console.error('Error fetching exam data:', error);
      });
  }, [examId]);

  const handleAnswerChange = (questionId, selectedChoice) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedChoice,
    });
  };

  const handleSubmission = async () => {
    // Calculate the score
    const calculatedScore = Object.keys(selectedAnswers).reduce((totalScore, questionId) => {
      const selectedChoice = selectedAnswers[questionId];
      const correctAnswer = questions.find((question) => question.id === parseInt(questionId, 10)).correctAnswer;
  
      if (selectedChoice === correctAnswer) {
        return totalScore + 1;
      }
  
      return totalScore;
    }, 0);
  
    setScore(calculatedScore);
    setSubmitted(true);
  
    // Prepare data for the POST request
    const postData = {
      user: 1,  // Replace with the actual user ID
      exam: examId,  // Replace with the actual exam ID
      start_time: null,
      end_time: null,
      status_name: 'completed',  // Assuming the default status is 'completed' after submission
      score: calculatedScore,
    };
  
    try {
      // Make the POST request
      const response = await axios.post('http://127.0.0.1:8000/api/user-exam-relations/', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST request successful:', response.data);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };
  

  // const goToResultPage = () => {
  //   navigate(`/result/${examId}`);
  // };

  return (
    <Layout>
      <div>
        {submitted ? (
          <ResultPage score={score} questions={questions} />
        ) : (
          <form>
            {questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                selectedAnswer={selectedAnswers[question.id] || ''}
                onAnswerChange={handleAnswerChange}
              />
            ))}
            <button type="button" onClick={handleSubmission}>
              Submit Answers
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}

export default TestDetail;
