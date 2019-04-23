const router = require('express').Router();
const passport = require('passport')
const uController = require('../controllers/usersController')
router
	.route('/register')
	.post(uController.createUser)



	// req.login uses these functions
passport.serializeUser((user_id, done) => {
  done(null, user_id);
});
// this gets the users info
passport.deserializeUser((user_id, done) => {
  done(null, user_id);
});


module.exports = router;