const router = require('express').Router();
const { findAll, signup, signin } = require('../controllers/users');

router
  .post('/signup', signup)
  .post('/signin', signin)
  .get('/', findAll)

module.exports = router;