module.exports = {
  encrypt: password => {
    const crypto = require('crypto');
    const encrypted = crypto.createHmac('sha256', process.env.SALT).update(password).digest('hex');
    return encrypted;
  }
}