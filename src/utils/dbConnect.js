const mongoose = require("mongoose");

const dbConnect = () => {
  const dbConnStr = process.env.MONGODB_URL; // initialize the environment variables
  mongoose.connect(dbConnStr, () => {
    console.log("Database Connected !!");
  });
};

module.exports = { dbConnect };
