const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  status: {
    text: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  birthday: {
    type: Date,
  },
  adress: {
    country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
