// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import ExamDetails from './components/ExamDetails';
import TestDetail from './components/TestDetail';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/category/:categoryId" element={<ExamDetails />} /> 
          <Route path="/explore/exams/:examId" element={<TestDetail />} />
          <Route path="/result/:examId" element={<ResultPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
