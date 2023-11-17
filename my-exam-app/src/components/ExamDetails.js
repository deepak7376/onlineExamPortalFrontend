import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExamDetails() {
  const { categoryId } = useParams();
  const [exams, setExams] = useState([]);
  console.log(categoryId);

  useEffect(() => {
    // Make an API request to fetch the exam data for the specific categoryId
    axios.get(`http://127.0.0.1:8000/api/exams/?category_name=${categoryId}`)
      .then((response) => {
        console.log(response.data);
        setExams(response.data);
      })
      .catch((error) => {
        console.error('Error fetching exam data:', error);
      });
  }, [categoryId]);

  return (
    <Layout>
      <div className="container">
        <h3 style={{ marginTop: '40px', marginBottom: '30px' }}> Subject Wise Exam Explore</h3>
        <div className="row">
          {exams
            .filter(exam => exam.exam_type === 'subjectwise')
            .map((exam) => (
              <div className="col-md-4" key={exam.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{exam.title}</Card.Title>
                    <Card.Text>{exam.description}</Card.Text>
                    <Link to={`/explore/exams/${exam.id}`} className="btn btn-primary">
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
                    <Link to={`/explore/exams/${exam.id}`} className="btn btn-primary">
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
            .filter(exam => exam.exam_type === 'premium')
            .map((exam) => (
              <div className="col-md-4" key={exam.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{exam.title}</Card.Title>
                    <Card.Text>{exam.description}</Card.Text>
                    <Link to={`/explore/exams/${exam.id}`} className="btn btn-primary">
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
