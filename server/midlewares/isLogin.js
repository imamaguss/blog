const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  isLogin: (req, res, next) => {
    const token = req.headers.accesstoken;
    jwt.verify(token, process.env.SECRET, (err, decode) => {
      req.decode = decode;
      next();
    })
  },
};