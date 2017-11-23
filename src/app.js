const express    = require('express');
const bodyParser = require('body-parser');

const app        = express();
const route      = express.Router();

const indexRoute = require('./route/index-route')

app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);

module.exports = app;






