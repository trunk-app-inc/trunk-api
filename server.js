const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3000;
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('./config/main')
const expressValidator = require('express-validator');
//mongo
mongoose.connect(config.database)

//middle
app.use(express.urlencoded({ useNewUrlParser: true }))
app.use(express.json());
app.use(expressValidator());
app.use(passport.initialize())
app.use(passport.session())

//passport strategy 
require('./config/passportjwt')(passport);
//routes
app.use('/api', require('./routes/api'))
app.use('/api', require('./routes/user'))

//start server
app.listen(PORT, () => {
	console.log('Server running...')
});


