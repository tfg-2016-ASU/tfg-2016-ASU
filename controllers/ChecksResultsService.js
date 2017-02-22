'use strict';

exports.deleteCheck = function(args, res, next) {
  /**
   * deletes a check based on the id_check, id_feedback and student supplied
   *
   * student String Name of student to fetch
   * id_feedback String Id of feedback to fetch
   * id_check String Id of feedback to fetch
   * no response value expected for this operation
   **/
  res.end();
}

exports.findStudentFeedbackCheck = function(args, res, next) {
  /**
   * Returns the result of the check id_check for the student and the if_feedback
   *
   * student String Name of student to fetch
   * id_feedback String Id of feedback to fetch
   * id_check String Id of check to fetch
   * returns resultCheck
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "id_feedback" : 123,
  "comments" : "aeiou",
  "student" : "aeiou",
  "subject" : "aeiou",
  "edition" : "aeiou",
  "id_check" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateCheckResultStudent = function(args, res, next) {
  /**
   * Updated check result for a student and feedback
   *
   * student String student to update
   * id_feedback String feedback to update
   * id_check String check to update
   * body ResultCheck Updated check object (optional)
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

