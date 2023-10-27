// Explore.js
import React from 'react';
import Layout from './Layout';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Explore() {
  const exams = [
    { id: 1, title: 'Mathematics Quiz', description: 'Test your math skills with this quiz.' },
    { id: 2, title: 'History Exam', description: 'A comprehensive history exam covering various historical events.' },
    { id: 3, title: 'Science Challenge', description: 'Explore the world of science with challenging questions.' },
    { id: 4, title: 'Programming Test', description: 'Test your coding knowledge and programming skills.' },
    { id: 5, title: 'Literature Exam', description: 'An examination of famous literary works and authors.' },
    { id: 6, title: 'Geography Quiz', description: 'Test your knowledge of countries, capitals, and geography.' },
    // Add more exam data with meaningful titles and descriptions
  ];
  
  return (
    <Layout>
      <div>
      <div className="container">
      <h3 style={{ marginTop: '40px', marginBottom: '30px'}}>Welcome to Online Exam Explore Page</h3> {/* Add margin-top */}
        <div className="row">
          {exams.map((exam) => (
            <div className="col-md-4" key={exam.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{exam.title}</Card.Title>
                  <Card.Text>{exam.description}</Card.Text>
                  <Link to={`exam/${exam.id}`} className="btn btn-primary">
                    Start Exam
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
    
  );
}

export default Explore;
