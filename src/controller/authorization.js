const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require("../model/userModel");

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
        expiresIn: '2h',
        // issuer: 'api.chay.com',
        // audience: 'chay.com'
    })

    return res.json(token)
})

const signupUser = asyncHandler(async(req, res, next)=>{
    const {username, email, password } = req.body
    // Hash Password
    const hasdPassword = await bcrypt.hash(password, 10)
    console.log(hasdPassword)
    const user = new userModel({
        username,
        email,
        password: hasdPassword
    })
    const result = await user.save();
    return res.status(201).json({message: "User created successfully"})
})

module.exports = {loginUser, signupUser}