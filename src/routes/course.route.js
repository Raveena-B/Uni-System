const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/course" });
const { addCourse } = require("../controller/course.controller");

router.get("/add", addCourse);

module.exports = router;
