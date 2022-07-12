const Student = require("../models/student.model");
const Course = require("../models/course.model");

const addStudent = async (ctx) => {
  try {
    const { name, nic, age, courseId } = ctx.request.body;
    const student = await Student.create({
      name,
      nic,
      age,
      courseId,
    });

    await Course.findByIdAndUpdate(courseId, {
      $push: { students: student._id },
    });
    return (ctx.body = student);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

module.exports = {
  addStudent,
};
