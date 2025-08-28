const { checkSchema } = require("express-validator");

const loginSchema = checkSchema({
  email: {
    isEmail: true,
    errorMessage: "Invalid Email address",
  },
  password: {
    // isStrongPassword: true,
    isLength: {
      options: {
        min: 5,
      },
    },
    errorMessage: "Password must be at least 5 letters",
  },
});

const signupSchema = checkSchema({
  username: {
    isAlpha: {
      locale: "en-US",
    },
    isLength: {
      options: {
        max: 15,
        min: 6,
      },
    },
    errorMessage: "Username must be at least 6 letters",
  },
  email: {
    isEmail: true,
    errorMessage: "Invalid Email address",
  },
  password: {
    // isStrongPassword: true,
    isLength: {
      options: {
        min: 5,
      },
    },
    errorMessage: "Password must be at least 5 letters",
  },
});
module.exports = { loginSchema, signupSchema };
