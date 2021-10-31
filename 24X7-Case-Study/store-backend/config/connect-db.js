const mongoose = require("mongoose"); /// loading mongoose module
const config = require("./db-config"); // loading config module

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected....");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
