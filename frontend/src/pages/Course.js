import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Course = () => {
  const [courses, setCourses] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [isEditClick, setIsEditClick] = useState("");

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editFee, setEditFee] = useState("");

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

  const onEditClick = (e) => {
    e.preventDefault();
    setEditId(e.target.id);
    setIsEditClick(!isEditClick);

    const course = courses.find((course) => course._id === e.target.id);
    setEditName(course.courseName);
    setEditFee(course.courseFee);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const courseObj = {
      courseName: editName,
      courseFee: editFee,
    };
    console.log(courseObj);
    axios
      .put(`${process.env.BASE_URL}/course/${editId}`, courseObj)
      .then(() => {
        alert("Course Updated");
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });

        setIsEditClick(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.BASE_URL}/course/${e.target.id}`)
      .then(() => {
        alert("Deleted Successfully");
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
              <td>
                {isEditClick && course._id === editId ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  course.courseName
                )}
              </td>
              <td>
                {isEditClick && course._id === editId ? (
                  <input
                    type="number"
                    value={editFee}
                    onChange={(e) => setEditFee(e.target.value)}
                  />
                ) : (
                  course.courseFee
                )}
              </td>
              <td>
                <button id={course._id} onClick={(e) => onEditClick(e)}>
                  {isEditClick && course._id === editId ? "Cancel" : "Update"}
                </button>
                {isEditClick && course._id === editId && (
                  <button onClick={(e) => updateHandler(e)}>Save</button>
                )}
                <button id={course._id} onClick={(e) => deleteHandler(e)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Course;
