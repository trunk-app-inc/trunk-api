const router = require('express').Router();
const passport = require('passport')
const uController = require('../controllers/usersController')
const tokens = require('../controllers/tokensController')
// router.use(passport.authenticate('bearer', {session: false}));
router
	.route('/register')
	.post(uController.createUser)

router
	.route('/authenticate')
	.post(uController.authenticate)
	
router
	.route('/authenticateInternal')
	.post(uController.authenticateInternal)

router
	.route('/verifyLogin')
	.post(uController.verifyLogin)

router
	.route('/genToken')
	.post(tokens.createToken)

	// req.login uses these functions
passport.serializeUser((user_id, done) => {
  done(null, user_id);
});
// this gets the users info
passport.deserializeUser((user_id, done) => {
  done(null, user_id);
});

module.exports = router;