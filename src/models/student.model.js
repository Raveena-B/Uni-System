const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  nic: { type: String, require: true },
  age: { type: String, require: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, require: false },
});

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;
