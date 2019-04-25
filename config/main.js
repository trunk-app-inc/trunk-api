module.exports = {
	'secret': 'r + l = j game of thrones nerds',
	// 'database': 'mongodb://a13jk9jbnk8b:12654fdsf6adf95133354d@ds019708.mlab.com:19708/trunk'		
	'database': process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/trunk'
}