const express    = require('express');
const route      = express.Router();
const controller = require('../controller/index-controller');

route.get('/', controller.get);

module.exports = route;