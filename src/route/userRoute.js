const express = require('express')
const { createUser, getUser } = require('../controller/userController')

const userRouter = express.Router()

userRouter.get('/', getUser)
userRouter.post('/', createUser)

module.exports = userRouter