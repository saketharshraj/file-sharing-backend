require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  const uri = process.env.MONGO_URI;
  console.log(uri);

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected."))
    .catch((err) => console.log("Connection Error.\n" + err));
}

module.exports = connectDB;
