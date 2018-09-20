const router = require('express').Router();
const { findAll, create, remove } = require('../controllers/category');

router.get('/', findAll);
router.post('/', create);
router.delete('/:id', remove);

module.exports = router;