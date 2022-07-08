require("dotenv").config();
const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("@koa/cors");
const bodyparser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const { dbConnect } = require("./utils/dbConnect");

const app = new Koa(); // create the new koa app
const router = new KoaRouter(); //initialize the koa router

//use the middlewares
app.use(cors());
app.use(bodyparser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());

// create the Root router ( use the bodyparser - massage of the body)
router.get("/", (ctx) => {
  //(node -> (req,res,next) but koa -> (ctx))  Encapsiulation
  ctx.body = { message: "Server Mangement API" };
});

//app listen function
app.listen(9000, () => {
  dbConnect();
  console.log(`Server is up and running http://localhost:9000`);
});
