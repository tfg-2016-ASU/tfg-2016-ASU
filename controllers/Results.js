'use strict';

var url = require('url');

var Results = require('./ResultsService');

module.exports.addStudent = function addStudent (req, res, next) {
  Results.addStudent(req.swagger.params, res, next);
};

module.exports.deleteFeedbackResult = function deleteFeedbackResult (req, res, next) {
  Results.deleteFeedbackResult(req.swagger.params, res, next);
};

module.exports.findStudentFeedback = function findStudentFeedback (req, res, next) {
  Results.findStudentFeedback(req.swagger.params, res, next);
};

module.exports.newCheck = function newCheck (req, res, next) {
  Results.newCheck(req.swagger.params, res, next);
};

module.exports.newResult = function newResult (req, res, next) {
  Results.newResult(req.swagger.params, res, next);
};

module.exports.updateResultStudent = function updateResultStudent (req, res, next) {
  Results.updateResultStudent(req.swagger.params, res, next);
};
