import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Course = () => {
  const [courses, setCourses] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseObj = { courseName, courseFee };

    axios
      .post(`${process.env.BASE_URL}/course/add`, courseObj)
      .then((res) => {
        alert("Data added");
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });

        setCourseName("");
        setCourseFee("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Add Course</h1>
      <input
        type="text"
        placeholder="Enter Course Name"
        name="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      ></input>
      <br />
      <input
        type="number"
        placeholder="Enter Course Fee"
        name="courseFee"
        value={courseFee}
        onChange={(e) => setCourseFee(e.target.value)}
      ></input>
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <br />
      <br />

      {/* convert js to json formate to render the inputs */}
      {/* <code>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </code> */}

      <table border={1}>
        <tr>
          <th>CourseName</th>
          <th>CourseFee</th>
          <th>Actions</th>
        </tr>
        {courses &&
          courses.length > 0 &&
          courses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.courseFee}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Course;
