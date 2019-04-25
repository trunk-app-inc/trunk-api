const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users')
const config = require('./main')
const BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = (passport) => {

    //login 
	var opts = {}
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
		});
    }));
    

    //api auth
    passport.use(new BearerStrategy(
        function(token, done) {
          User.findOne({ apiToken: token }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
          });
        }
      ));

}