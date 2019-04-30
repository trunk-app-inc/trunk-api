const axios = require('axios')

module.exports = {
	login: (userData) => {
		return axios.post('http://localhost:3001/api/authenticateInternal', userData)
	},
	verify: (token) => {
		return axios.post('http://localhost:3001/api/verifyLogin', token)
	}
}