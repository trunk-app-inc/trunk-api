const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3000;

//mongo
mongoose.connect('mongodb://localhost/trunk')

//middle
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//routes
app.get('/api', require('./routes/api'))

//start server
app.listen(PORT, () => {
	console.log('Server running...')
});