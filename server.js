const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3001;
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('./config/main')
const expressValidator = require('express-validator');
const cors = require('cors')
const path = require('path')
const axios = require('axios')
//mongo
mongoose.connect(config.database)

//middle
app.use(express.urlencoded({ useNewUrlParser: true }))
app.use(express.json());
app.use(expressValidator());
app.use(passport.initialize())
app.use(passport.session())

// Set up a whitelist and check against it:
// var whitelist = ['http://localhost', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    // } else {
      // callback(new Error('Not allowed by CORS'))
    // }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

//passport strategy 
require('./config/passportjwt')(passport);
//routes
app.use('/api', require('./routes/api'))
app.use('/api', require('./routes/user'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
//start server
app.listen(PORT, () => {
	console.log('Server running...')
});


