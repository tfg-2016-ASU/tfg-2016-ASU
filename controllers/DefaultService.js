'use strict';

exports.findFeedbacks = function(args, res, next) {
  /**
   * Returns the information about all feedbacks
   *
   * limit Integer maximum number of results to return (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
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
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

