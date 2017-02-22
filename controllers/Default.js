'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.findFeedbacks = function findFeedbacks (req, res, next) {
  Default.findFeedbacks(req.swagger.params, res, next);
};
