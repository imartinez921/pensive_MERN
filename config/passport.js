const JwtStrategy = require("passport-jwt").Strategy; //handle tokens
const ExtractJwt = require("passport-jwt").ExtractJwt; //
const mongoose = require("mongoose"); // user model
const User = mongoose.model("users"); // import user model
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // built-in in passport jwt, extract the bear token from header
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            // return the user to the frontend
            return done(null, user);
          }
          // return false since there is no user
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};