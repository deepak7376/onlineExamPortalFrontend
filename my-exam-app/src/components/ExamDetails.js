import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExamDetails() {
  const { examId } = useParams();
  const [exams, setExams] = useState([]);
  console.log(examId);

  useEffect(() => {
    // Make an API request to fetch the exam data for the specific examId
    axios.get(`https://probable-winner-54wgj75p79ph4pgx-8000.app.github.dev/api/exams/?category_name=${examId}`)
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error('Error fetching exam data:', error);
      });
  }, [examId]);

  return (
    <Layout>
      <div className="container">
        <h3 style={{ marginTop: '40px', marginBottom: '30px' }}> Subject Wise Exam Explore</h3>
        <h2>{exams}</h2>
        <div className="row">
          {exams
            .filter(exam => exam.exam_type === 'subjectwise')
            .map((exam) => (
              <div className="col-md-4" key={exam.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{exam.title}</Card.Title>
                    <Card.Text>{exam.description}</Card.Text>
                    <Link to={`exams/${exam.id}`} className="btn btn-primary">
                      Start Exam
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <div className="container">
        <h3 style={{ marginTop: '40px', marginBottom: '30px' }}>Mock Exam Explore</h3>
        <div className="row">
          {exams
            .filter(exam => exam.exam_type === 'mock')
            .map((exam) => (
              <div className="col-md-4" key={exam.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{exam.title}</Card.Title>
                    <Card.Text>{exam.description}</Card.Text>
                    <Link to={`exams/${exam.id}`} className="btn btn-primary">
                      Start Exam
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <div className="container">
        <h3 style={{ marginTop: '40px', marginBottom: '30px' }}>Full Mock Exam Explore</h3>
        <div className="row">
          {exams
            .filter(exam => exam.exam_type === 'full_mock')
            .map((exam) => (
              <div className="col-md-4" key={exam.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{exam.title}</Card.Title>
                    <Card.Text>{exam.description}</Card.Text>
                    <Link to={`exams/${exam.id}`} className="btn btn-primary">
                      Start Exam
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default ExamDetails;
