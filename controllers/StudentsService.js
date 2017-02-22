'use strict';

exports.deleteStudent = function(args, res, next) {
  /**
   * deletes a single student based on the name supplied
   *
   * name String name of student to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.findStudentByName = function(args, res, next) {
  /**
   * Returns a students based on a name
   *
   * name String name of student to fetch
   * returns student
   **/
  var examples = {};
  examples['application/json'] = {
  "shift" : "aeiou",
  "name" : "aeiou",
  "group" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findStudents = function(args, res, next) {
  /**
   * Returns all students from the system that the user has access to
   *
   * limit Integer maximum number of results to return (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "shift" : "aeiou",
  "name" : "aeiou",
  "group" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateStudent = function(args, res, next) {
  /**
   * Updated student
   *
   * name String student to update
   * body Student Updated student object
   * returns errorModel
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

