const router = require('express').Router();
const passport = require('passport')
router.use(passport.authenticate('bearer', {session: false}));
	router.get('/initial', (req, res) => {
		res.send('api is working');
	})


module.exports = router