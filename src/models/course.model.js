const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  //create all database tables
  courseName: { type: String, require: true },
  courseFee: { type: Number, require: true },
  studentId: [{ type: mongoose.Schema.Types.ObjectId, require: false }],
});

const Course = mongoose.model("courses", CourseSchema); //collection name created

module.exports = Course;
