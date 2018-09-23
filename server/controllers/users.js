const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { encrypt } = require('../helpers/encrypt');

module.exports = {
  signup: (req, res) => {
    User
      .create({
        name: req.body.name, 
        email: req.body.email,
        password: encrypt(req.body.password)
      })
      .then(result => {
        res.status(200).json({ message: `Hii ${result.name}, now you are a part of our big family` });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
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
          }, process.env.SECRET, (err, token) => {
            res.status(200).json({ 
              message: `Welcome home ${user.name}`,
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