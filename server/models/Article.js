const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  content: String,
  comment: {
    type: String,
    default: null
  },
  commenter: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }],
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;