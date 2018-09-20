const router = require('express').Router();
const { create, findAll, update, remove } = require('../controllers/articles');
const { isLogin } = require('../midlewares/isLogin');

router.post('/', isLogin, create);
router.get('/', findAll);
router.put('/:id', isLogin, update);
router.delete('/:id', isLogin, remove);

module.exports = router;