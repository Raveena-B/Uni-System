const KoaRouter = require("koa-router");
const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controller/student.controller");
const router = new KoaRouter({ prefix: "/student" });

router.post("/add", addStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
