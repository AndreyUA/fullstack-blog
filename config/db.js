const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("mongo DB connected");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;

// mongoDB url
// https://cloud.mongodb.com/v2/5fe89b4128b23f4be2c57309#clusters
