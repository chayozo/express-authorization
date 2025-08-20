const userModel = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = new userModel({
    username: username,
    email: email,
    password: password,
  });
  const result = await user.save();
  console.log("Create User Successfully. Username:", result.username);
  return res.json({
    message: "Create User Successfully",
    data: result,
  });
});

const getUser = asyncHandler(async(req, res) =>{
    const result = await userModel.find()
    return res.json(result)
})

module.exports = { createUser, getUser };
