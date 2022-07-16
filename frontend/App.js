import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./src/pages/Course";
import Home from "./src/pages/Home";
import Student from "./src/pages/Student";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/course" element={<Course />} />
    </Routes>
  </Router>;
};

export default App;
