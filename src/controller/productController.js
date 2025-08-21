const asyncHandler = require("express-async-handler");
const productModel = require("../model/productModel");
const { get } = require("mongoose");

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, qty, image } = req.body;
  const product = new productModel({
    name: name,
    price: price,
    qty: qty,
    image: image
  })
  const result =  await product.save()
  return res.json({
    message: "Create Product successfully..",
    result: result
  });
});

const getProduct = asyncHandler(async(req, res)=>{
    const user = await productModel.find()
    return res.json(user)
})

module.exports = {createProduct, getProduct}
