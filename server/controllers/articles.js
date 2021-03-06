const Article = require('../models/Article');
const jwt = require('jsonwebtoken');
const Comment = require('../models/Comment');

module.exports = {
  create: (req, res) => {
    Article
      .create({
        title: req.body.title,
        authorId: req.decode.id,
        categoryId: req.body.categoryId,
        content: req.body.content,
        image: req.body.image
      })
      .then(result => {
        res.status(200).json({ message: `${result.title} has been insert into Articles`});
      })
      .catch(err => {
        res.status(500).json({ message: err.message});
      })
  },

  findAll: (req, res) => {
    Article
      .find({})
      .populate('authorId')
      .populate('categoryId')
      .then(articles => {
        res.status(200).json({ articles });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  update: (req, res) => {
    Article
      .findById({ _id: req.params.id })
      .then(article => {
        if(req.decode.id == article.authorId) {
          return Article.updateOne({ _id: req.params.id }, {
            title: req.body.title,
            categoryId: req.body.categoryId,
            content: req.body.content,
            image: req.body.image
          });
        } else {
          res.status(400).json({ message: `You don't have access to this action`});
        }
      })
      .then(result => {
        res.status(200).json({ message: `Article has been updated`});
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  remove: (req, res) => {
    Article
      .findById({ _id: req.params.id})
      .then(article => {
        if(article.authorId == req.decode.id) {
          return Article.deleteOne({ _id: req.params.id });
        } else {
          res.status(400).json({ message: `You don't have access to this action`});
        }
      })
      .then(result => {
        if(result.n) {
          res.status(200).json({ 
            message: `Article has been destroyed`,
            article: result
          });
        } else {
          res.status(400).json({ message: `Ooops.. article not found!!`});
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  findById: (req, res) => {
    Article
      .findById({ _id: req.params.id })
      .then(article => {
        if(article) {
          res.status(200).json({ article });
        } else {
          res.status(400).json({ message: `Article is not found!!`})
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  

  addComment: (req, res) => {
    const commentObj = {
      comments: req.body.comments,
      commenter: req.decode.id
    }

    Article
      .findByIdAndUpdate(req.params.id, {
        $push: {
          comments: commentObj
        }
      }, { new: true })
      .populate('Comment.commenter')
      .then(article => {
        res.status(200).json({ 
          message: `Your comment has been posted`, 
          data: article
        });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  removeComment: (req, res) => {
    // console.log('decode ===> ', req.decode);
    // console.log('comment id ===> ', req.params.id);
    // console.log(req.params.id);
    
    Article
      .findById(req.params.id)
      .then(result => {
        console.log(result.comments,'ini result');
      }).catch(err=>{
        console.log(err)
      })
    
  },

  filter: (req, res) => {
    Article
    .find({ categoryId: req.params.categoryId })
    .populate('authorId')
    .populate('categoryId')
    .then(articles => {
      console.log(articles);
      res.status(200).json({articles});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    })
  },

};