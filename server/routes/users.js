const router = require('express').Router();
const { findAll, signup, signin } = require('../controllers/users');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/', findAll);

module.exports = router;