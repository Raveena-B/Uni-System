const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/course" });
const {
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controller/course.controller");

router.post("/add", addCourse); //only define the end points -> add , addcourse method is implemented in controller file
router.get("/", getCourse);
router.put("/:courseId", updateCourse);
router.delete("/:courseId", deleteCourse);

module.exports = router;
