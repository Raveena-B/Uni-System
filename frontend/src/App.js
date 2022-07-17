import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Student from "./pages/Student";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
