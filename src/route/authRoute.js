const express = require('express')
const { loginUser, signupUser } = require('../controller/authorization')
const { loginSchema, signupSchema } = require('../common/strategies/validation/validation')
const { handleValidation } = require('../middleware/middleware')

const authRouter = express.Router()

authRouter.post('/login', loginSchema, handleValidation, loginUser)
authRouter.post('/signup', signupSchema, handleValidation, signupUser)

module.exports = authRouter