const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require("../../model/userModel");

const loginUser = asyncHandler(async(req, res) =>{
    const {email, password} = req.body;
    const user =  await userModel.findOne({email: email})
    if(!user){
        return res.json("User Not Found")
    }
    // Compare Password from userModel
    const passMatch = bcrypt.compare(password, user.password)
    if(!passMatch) {
        return res.json("Username and Password is incorrect")
    }

    //Sign JWT
    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, {
        expiresIn: '2h'
    })

    return res.json(token)
})

module.exports = {loginUser}