const db = require('../models');
const config = require('../config/main')
const uuidv4 = require('uuid/v4');
const jwt = require('jsonwebtoken')
module.exports = {
	createToken: (req, res) => {
		let token = uuidv4();
		let jwtToken = req.body.token
		
		let decoded = jwt.decode(jwtToken)
		console.log(decoded)
		db.tokens.create({
			token: token,
			email: decoded.email,
			active: true,
			uses: 0 
		})
		res.send({status: 200, apiKey: token})	
	}
}