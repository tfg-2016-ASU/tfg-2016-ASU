'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addFeedback = function addFeedback (req, res, next) {
  Default.addFeedback(req.swagger.params, res, next);
};

module.exports.addFeedbackResult = function addFeedbackResult (req, res, next) {
  Default.addFeedbackResult(req.swagger.params, res, next);
};

module.exports.deleteFeedback = function deleteFeedback (req, res, next) {
  Default.deleteFeedback(req.swagger.params, res, next);
};

module.exports.findFeedbackById = function findFeedbackById (req, res, next) {
  Default.findFeedbackById(req.swagger.params, res, next);
};

module.exports.findFeedbacksResults = function findFeedbacksResults (req, res, next) {
  Default.findFeedbacksResults(req.swagger.params, res, next);
};
