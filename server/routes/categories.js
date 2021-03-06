const router = require('express').Router();
const { findAll, create, remove, filter } = require('../controllers/category');

router
  .get('/', findAll)
  .post('/', create)
  .delete('/:id', remove)

module.exports = router;