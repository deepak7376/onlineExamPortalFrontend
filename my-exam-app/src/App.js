// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Explore from './components/Explore';
import ExamPage from './components/ExamPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Other components/routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/exam/:examId" element={<ExamPage />} /> {/* Dynamic route for the exam page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
