const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { encrypt } = require('../helpers/encrypt');

module.exports = {
  signup: (req, res) => {
    // console.log(req.body);
    User.create({
      name: req.body.name, 
      email: req.body.email,
      password: encrypt(req.body.password)
    })
    .then(result => {
      // console.log(result);
      res.status(200).json({
        message: `${result.name} has been new Users`
      })
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({
        message: err.message
      })
    })
  },
  
  signin: (req, res) => {
    User
    .findOne({
      email: req.body.email,
      password: encrypt(req.body.password)
    })
    .then(user => {
      if(user) {
        jwt.sign({
          id: user._id,
          name: user.name,
          email: user.email,
        }, process.env.SECRET, (err , token) => {
          // console.log(token);
          res.status(200).json({ 
            message: `Successfully signed in as ${user.name}`,
              token,
          });
        })
      } else {
        res.status(400).json({ message: 'User not found!' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
  },

  findAll: (req, res) => {
    User
      .find({})
      .then(users => {
        res.status(200).json({ users });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  }

};