
import AssessmentPage from "./components/Ques";
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeForm from "./components/ResumeForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssessmentPage />} />
        <Route path="/resume-form" element={<ResumeForm />} />
      </Routes>
    </Router>
  );
};

export default App;