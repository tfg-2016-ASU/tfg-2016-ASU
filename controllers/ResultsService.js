'use strict';

exports.addStudent = function(args, res, next) {
  /**
   * Creates a new student in the store.
   *
   * student Student Student to add
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

exports.deleteFeedbackResult = function(args, res, next) {
  /**
   * deletes a feedback based on the id_feedback and student supplied
   *
   * student String Name of student to fetch
   * id_feedback String Id of feedback to fetch
   * no response value expected for this operation
   **/
  res.end();
}

exports.findStudentFeedback = function(args, res, next) {
  /**
   * Returns the result of the feedback id_feedback for the student
   *
   * student String Name of student to fetch
   * id_feedback String Id of feedback to fetch
   * returns resultFeedback
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "id_feedback" : 123,
  "score" : 123,
  "student" : "aeiou",
  "subject" : "aeiou",
  "edition" : "aeiou",
  "reviewer" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.newCheck = function(args, res, next) {
  /**
   * Post a new check result for a student and feedback
   *
   * student String student to update
   * id_feedback String feedback to update
   * body ResultCheck check result (optional)
   * returns resultFeedback
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "id_feedback" : 123,
  "score" : 123,
  "student" : "aeiou",
  "subject" : "aeiou",
  "edition" : "aeiou",
  "reviewer" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.newResult = function(args, res, next) {
  /**
   * Post a new feedback result for a student
   *
   * body ResultFeedback feedback result (optional)
   * returns resultFeedback
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "id_feedback" : 123,
  "score" : 123,
  "student" : "aeiou",
  "subject" : "aeiou",
  "edition" : "aeiou",
  "reviewer" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateResultStudent = function(args, res, next) {
  /**
   * Updated feedback result for a student
   *
   * student String student to update
   * id_feedback String feedback to update
   * body ResultFeedback Updated feedback object (optional)
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

