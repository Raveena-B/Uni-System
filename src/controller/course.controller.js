const Course = require("../models/course.model");

const addCourse = (ctx) => {
  console.log(ctx.request.body);
  return (ctx.body = { message: "API Course Router" });
};

module.exports = {
  addCourse,
};
