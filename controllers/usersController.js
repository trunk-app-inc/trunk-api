const passport = require('passport');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const bcrypt = require('bcrypt');
const db = require('../models');
const config = require('../config/main')
module.exports = {
	authenticate: (req, res) => {
		db.users.findOne({
			email: req.body.email
		}).then((err, user) => {
			if(err) throw err;
			if(user){
				const passwordCheck = bcyrpt.compareSync(password, user.password);
				if(passwordCheck) { 
					let token = jwt.sign(user, config.secret, {
						expiresIn: 99999 //in seconds
					});
					res.json({success: 'true', token: `JWT ${token}`})
				} else {
					res.send({success: false , message: 'Authenication failed'})
				}
			}
		})
	},

	createUser: (req, res) => {
    req.checkBody('username', 'Username cannot be empty.').notEmpty();
    req.checkBody('email', 'Email field must not be empty.').notEmpty();
    req.checkBody('email', 'Email field must be and email.').isEmail();
    req.checkBody('password', 'Password must be 8 characters long.').len(8, 100);
    req.checkBody('passwordMatch', 'Password must be 8 characters long.').len(8, 100);
    req.checkBody('passwordMatch', 'Password must be 8 characters long.').equals(req.body.password);

    const errors = req.validationErrors();

    if (errors) {
      res.send(errors);
    } else {
      // hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(req.body.password, salt);
      // bcrypt the password then insert

      db.users.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        theme: 1,
        img: 'https://github.com/robaboyd/VGC/blob/master/client/src/assets/defaultProfile.png?raw=true',

      })
        .then((created) => {
          console.log('created a user');
					res.send(true);
       ;
        })
        .catch((err) => {
          // create user errors
          // either duplicate username or email
          if (err) {
            console.log(err.errmsg);
            const data = [err.errmsg];
            res.send(err);
          }
        });
    }
  },
}