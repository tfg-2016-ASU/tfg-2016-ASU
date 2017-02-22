'use strict';

var url = require('url');

var ChecksResults = require('./ChecksResultsService');

module.exports.deleteCheck = function deleteCheck (req, res, next) {
  ChecksResults.deleteCheck(req.swagger.params, res, next);
};

module.exports.findStudentFeedbackCheck = function findStudentFeedbackCheck (req, res, next) {
  ChecksResults.findStudentFeedbackCheck(req.swagger.params, res, next);
};

module.exports.updateCheckResultStudent = function updateCheckResultStudent (req, res, next) {
  ChecksResults.updateCheckResultStudent(req.swagger.params, res, next);
};
