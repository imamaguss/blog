const router = require('express').Router();
const { isLogin } = require('../midlewares/isLogin');
const { 
  create, update, remove,
  findAll, findById, 
  addComment, removeComment 
} = require('../controllers/articles');

router
  .post('/', isLogin, create)
  .get('/', findAll)
  .get('/:id', findById)
  .put('/:id', isLogin, update)
  .delete('/:id', isLogin, remove)
  .put('/:id/comment', isLogin, addComment)
  .put('/:id/comment/:commentId', isLogin, removeComment)
  
module.exports = router;