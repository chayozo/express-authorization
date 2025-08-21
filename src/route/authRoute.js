const express = require('express')
const { loginUser } = require('../controller/authorization')

const authRouter = express.Router()

authRouter.post('/login', loginUser)

module.exports = authRouter