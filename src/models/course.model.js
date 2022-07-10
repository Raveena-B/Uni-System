const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  //create all database tables
  courseName: { type: String, required: true },
  courseFee: { type: Number, required: true },
  studentId: [
    { type: mongoose.Schema.Types.ObjectId, required: false, ref: "students" },
  ],
});

const Course = mongoose.model("courses", CourseSchema); //collection name created

module.exports = Course;
