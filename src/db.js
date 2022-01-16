const { connect, connection } = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = async() => {
  await connect(MONGODB_URI);
  // console.log("MongoDB Connected");
}

connection.on("error", error => console.log(error));

module.exports = {
  connectDB,
  connection
}