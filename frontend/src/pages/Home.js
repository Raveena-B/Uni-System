import React from "react";

const Home = () => {
  return (
    <div>
      <Link to="student">
        <button>Manage Students</button>
      </Link>
      <Link to="course">
        <button>Manage Courses</button>
      </Link>
    </div>
  );
};

export default Home;
