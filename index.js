const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const dbConnect = require("./src/db/db");
const userRouter = require("./src/route/userRoute");
const { logger, errHandler, verifyToken } = require("./src/middleware/middleware");
const authRouter = require("./src/route/authRoute");
const app = express();
const port = process.env.PORT;

// Conncetion DB
dbConnect().catch((err) => {
  console.log("Connection Error:", err);
});

app.use(bodyParser.json());
app.use(logger)
app.use('/api/auth', authRouter)
app.use('/api/user',verifyToken, userRouter)

app.use(errHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port} ==> http://localhost:${port}/api/`);
});

