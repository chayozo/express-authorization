const userModel = require("../../model/userModel");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();

const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  // issuer: 'api.chay.com',
  // audience: 'chay.com'
};

const jwtStrategy = new JwtStrategy(opt, async (jwt_payload, done) => {
  try {
    const user = await userModel.findById(jwt_payload.id);
    if (!user) {
      done(null, false);
    }
    done(null, user);
  } catch (err) {
    console.error(err);
  }
});

module.exports = jwtStrategy;
