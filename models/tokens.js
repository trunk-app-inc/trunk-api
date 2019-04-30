const mongoose = require('mongoose');

mongoose.set('useFindandModify', false);
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
		token: {type: String, required: true, unique: true},
		email: {type: String, required: true},
		active: {type: Boolean, required: true},
		uses: {type: Number, required: true }
})

const token = mongoose.model('token', tokenSchema);
module.exports = token;