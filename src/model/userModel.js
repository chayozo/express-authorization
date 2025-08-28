const mongoose = require("mongoose");
const favoriteRouter = require("../route/favoriteRoute");

const userSchema = new mongoose.Schema({
  username: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  role: {
    type: String,
    required: true,
    enum: ["admin", "editor", "user"],
    default: 'user'
  },
  createdDate: { default: Date.now, type: Date },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
