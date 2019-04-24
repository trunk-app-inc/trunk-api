const router = require('express').Router();

	router.get('/initial', (req, res) => {
		res.send('api is working');
	})


module.exports = router