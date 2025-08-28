const jwt = require("jsonwebtoken")
const {validationResult} = require('express-validator')
require('dotenv').config()

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);  
  next();
};

const errHandler = (err, req, res, next) => {
  console.log("=====>500 Internal Server Error<=====");
  return res.status(500).json({ message: err.message });
};

const verifyToken = (req, res, next) => {
  let token = req.header("Authorization");
  if(!token){
    return res.status(401).json({error: "No Token"})
  }
  // Repace Token
  token = token.replace("Bearer ", "")
  const decode = jwt.verify(token, process.env.JWT_SECRET)
  req.user = decode
  next()
};

const handleValidation = (req, res, next) => {
  const result = validationResult(req)
  if(!result.isEmpty()){
    return res.status(401).json({error: result.array()})
  }
  next()
}

module.exports = { logger, errHandler, verifyToken, handleValidation };
