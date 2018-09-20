require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const articleRouter = require('./routes/articles');
const categoryRouter = require('./routes/categories');

mongoose.connect(process.env.DB, () => { console.log('DB connected') });

server
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(cors())

server
  .use('/users', userRouter)
  .use('/articles', articleRouter)
  .use('/categories', categoryRouter)
  .listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  })