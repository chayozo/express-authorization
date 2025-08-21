const mongoose = require("mongoose");

const productSchem = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  qty: { type: Number, require: true },
  image: { type: String, require: true },
  createdDate: {type: Date, default: Date.now}
});

const productModel = mongoose.model("products", productSchem);
module.exports = productModel;
