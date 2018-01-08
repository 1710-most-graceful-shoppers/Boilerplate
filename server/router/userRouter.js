const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  res.send('This is the product Router');
})

module.exports = userRouter;
