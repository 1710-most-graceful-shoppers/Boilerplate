const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  res.send('This is the product Router');
})

module.exports = productRouter;
