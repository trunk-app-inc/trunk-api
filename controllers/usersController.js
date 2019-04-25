const passport = require('passport');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const bcrypt = require('bcrypt');
const db = require('../models');
const config = require('../config/main')
const axios = require('axios')
module.exports = {
	authenticate: (req, res) => {
    console.log(req.body.email)
    console.log(req)
		db.users.findOne({
			email: req.body.email
		}).then((data) => {

      let user = {
        email: req.body.email,
        password: req.body.password
      }

			if(data){
				const passwordCheck = bcrypt.compareSync(req.body.password, data.password);
        console.log(`password check: ${passwordCheck}`)
				if(passwordCheck) { 
					let token = jwt.sign(user, config.secret, {
						expiresIn: 99999 //in seconds
          });
          //send token
          res.json({success: 'true', token: `${token}`})
				} else {
					res.send({success: false , message: 'Authenication failed'})
				}
			}
		})
  },
  
  verifyLogin: (req, res) => {
    jwt.verify(req.body.token, config.secret ,(err, auth) => {
      console.log(auth)
      res.send(auth)
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

          let user = {
            email: created.email,
            password: created.password
          }
          console.log(user)
          //get a token for the new user
          let token = jwt.sign(user, config.secret, {
						expiresIn: 99999 //in seconds
          });
          //send token
          res.json({success: 'true', token: `${token}`})
        })
        .catch((err) => {
          // create user errors
          // either duplicate username or email
          if (err) {
            console.log(err);
            const data = [err.Error];
            res.send(err);
          }
        });
    }
  },
}