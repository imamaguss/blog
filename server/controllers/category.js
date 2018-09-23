const Category = require('../models/Category');
const Article = require('../models/Article');

module.exports = {
  findAll: (req, res) => {
    Category
      .find({})
      .then(categories => {
        res.status(200).json({ categories });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  create: (req, res) => {
    Category
      .create({ name: req.body.name })
      .then(result => {
        res.status(200).json({ message: `${result.name} has been insert into Category`});
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
    // console.log(req.body);
    
  },

  remove: (req, res) => {
    // console.log(req.params);
    Category    
      .deleteOne({ _id: req.params.id})
      .then(result => {
        // console.log(result);
        if(result.n) {
          res.status(200).json({ message: `Category has been deleted`});
        } else {
          res.status(400).json({ message: `Ooopss.. category not found!!`});
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
  },

  filter: (req, res) => {
    console.log(req.params);
    Article
      .find({ })
  }

};