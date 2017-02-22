'use strict';

var url = require('url');

var Students = require('./StudentsService');

module.exports.deleteStudent = function deleteStudent (req, res, next) {
  Students.deleteStudent(req.swagger.params, res, next);
};

module.exports.findStudentByName = function findStudentByName (req, res, next) {
  Students.findStudentByName(req.swagger.params, res, next);
};

module.exports.findStudents = function findStudents (req, res, next) {
  Students.findStudents(req.swagger.params, res, next);
};

module.exports.updateStudent = function updateStudent (req, res, next) {
  Students.updateStudent(req.swagger.params, res, next);
};
