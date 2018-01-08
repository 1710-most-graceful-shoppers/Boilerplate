const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
  res.send('this is the api router');
})
apiRouter.use('/users', require('./userRouter.js'));
apiRouter.use('/products', require('./productRouter.js'));
apiRouter.use((req, res, next) => {
  const err = new Error('No api Route found');
  err.status = 404;
  next(err);
})

module.exports = apiRouter;
