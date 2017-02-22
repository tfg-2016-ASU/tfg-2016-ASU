'use strict';

var url = require('url');

var Feedbacks = require('./FeedbacksService');

module.exports.deleteFeedbackInformation = function deleteFeedbackInformation (req, res, next) {
  Feedbacks.deleteFeedbackInformation(req.swagger.params, res, next);
};

module.exports.findFeedback = function findFeedback (req, res, next) {
  Feedbacks.findFeedback(req.swagger.params, res, next);
};

module.exports.newFeedback = function newFeedback (req, res, next) {
  Feedbacks.newFeedback(req.swagger.params, res, next);
};

module.exports.updateFeedbackInformation = function updateFeedbackInformation (req, res, next) {
  Feedbacks.updateFeedbackInformation(req.swagger.params, res, next);
};
