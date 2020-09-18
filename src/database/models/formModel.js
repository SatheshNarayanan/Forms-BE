const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  notes: {
    type: [String],
    required: true
  },
  profilePic: {
    type: String,
    required: true
  }
});

const User = model("User", UserSchema);

module.exports = User;
