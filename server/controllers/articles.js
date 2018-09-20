const Article = require('../models/Article');
const jwt = require('jsonwebtoken');

module.exports = {
  create: (req, res) => {
    Article
      .create({
        title: req.body.title,
        authorId: req.decode.id,
        categoryId: req.body.categoryId,
        content: req.body.content,
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
            content: req.body.content
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
  }

};