const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  createdDate: {default: Date.now, type: Date}
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
