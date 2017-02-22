'use strict';

exports.deleteFeedbackInformation = function(args, res, next) {
  /**
   * deletes a feedback based on the id_feedback supplied
   *
   * id_feedback String Id of feedback to fetch
   * no response value expected for this operation
   **/
  res.end();
}

exports.findFeedback = function(args, res, next) {
  /**
   * Returns the information of the feedback id_feedback
   *
   * id_feedback String Id of feedback to fetch
   * returns informationFeedback
   **/
  var examples = {};
  examples['application/json'] = {
  "id_feedback" : 123,
  "checks" : [ {
    "description" : "aeiou",
    "typeCheck" : "aeiou",
    "idCheck" : 123
  } ],
  "preparation" : [ {
    "id_preparation" : 123,
    "description" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.newFeedback = function(args, res, next) {
  /**
   * Post a new feedback information
   *
   * body InformationFeedback feedback information (optional)
   * returns informationFeedback
   **/
  var examples = {};
  examples['application/json'] = {
  "id_feedback" : 123,
  "checks" : [ {
    "description" : "aeiou",
    "typeCheck" : "aeiou",
    "idCheck" : 123
  } ],
  "preparation" : [ {
    "id_preparation" : 123,
    "description" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateFeedbackInformation = function(args, res, next) {
  /**
   * Updated feedback for a student
   *
   * id_feedback String feedback to update
   * body InformationFeedback Updated feedback object (optional)
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

