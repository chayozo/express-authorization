const express = require("express");
const { getProduct, createProduct } = require("../controller/productController");
const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.post("/", createProduct);
module.exports = productRouter;
