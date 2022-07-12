const KoaRouter = require("koa-router");
const { addStudent } = require("../controller/student.controller");
const router = new KoaRouter({ prefix: "/stduent" });

router.post("/add", addStudent);

module.exports = router;
