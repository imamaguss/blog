const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  isLogin: (req, res, next) => {
    // console.log(req.headers.accesstoken);
    const token = req.headers.accesstoken;
    // const token = req.headers.token;
    jwt.verify(token, process.env.SECRET, (err, decode) => {
      // console.log('=====>', decode);
      req.decode = decode;
      next();
    })

  }

};