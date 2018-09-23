const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const articleSchema = new Schema({
  title: String,
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  image: String,
  content: String,
  comments: [Comment.schema],
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;