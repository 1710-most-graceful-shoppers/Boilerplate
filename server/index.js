const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./router'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
})

app.listen(PORT, () => {
  console.log(`Shoppaloppin' on PORT ${PORT}`)
})
