'use strict';

//--------------------------------------------
var path = require("path");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var assert = require('assert');
var FEEDBACKS_COLLECTION = "feedbacks";
var FEEDBACKS_RESULTS_COLLECTION = "feedbacksResults";
var db;
var url = 'mongodb://admin:admin@ds137360.mlab.com:37360/mongolab-01';
mongodb.MongoClient.connect(url, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log("Database connection ready");
});
//--------------------------------------------

exports.addFeedback = function(args, res, next) {
  /**
   * Creates a new feedback.  Duplicates are allowed
   *
   * feedback FeedbackInformation Feedback to add
   * returns feedbackInformation
   **/
  var newFeedback = args['feedback']['originalValue'];
  newFeedback.createDate = new Date();
  db.collection(FEEDBACKS_COLLECTION).insertOne(newFeedback, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new feedback");
    }else{
      res.status(201).json(doc.ops[0]);
    }
  });
  
}


exports.addFeedbackResult = function(args, res, next) {
  /**
   * Creates a new feedback result for a student.  Duplicates are allowed
   *
   * feedbackResult FeedbackResult Feedback result to add
   * returns feedbackResult
   **/
  
  var newFeedback = args['feedbackResult']['originalValue'];
  newFeedback.createDate = new Date();
  db.collection(FEEDBACKS_RESULTS_COLLECTION).insertOne(newFeedback, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new feedback result");
    }else{
      res.status(201).json(doc.ops[0]);
    }
  });
  
}


exports.deleteFeedback = function(args, res, next) {
  /**
   * deletes a single feedback based on the ID supplied
   *
   * idFeedback Long ID of feedback to delete
   * no response value expected for this operation
   **/
  var idFeedback = args['idFeedback']['value'];
  db.collection(FEEDBACKS_COLLECTION).remove({idFeedback:idFeedback}, {}, (err,numRemoved)=>{
		if(err){
			res.sendStatus(500);
		}else{
			console.log("Deleted " + numRemoved + " objects");
			res.sendStatus(200);
		}
	});
}

exports.findFeedbackById = function(args, res, next) {
  /**
   * Returns the information of a feedback based on a single ID
   *
   * idFeedback Long ID of feedback to fetch
   * returns feedbackInformation
   **/
  var idFeedback = args['idFeedback']['value'];
  console.log(args['idFeedback']['value']);
  db.collection(FEEDBACKS_COLLECTION).find({idFeedback:idFeedback}).toArray(function(err, docs) {
        if(err) {
            handleError(res, err.message, "Failed to get feedbacks");
        }else{
            res.status(200).json(docs);
        }
    });
}


exports.findFeedbacksResults = function(args, res, next) {
  /**
   * Returns all feedbacks results from the system that the user has access to
   *
   * limit Integer maximum number of results to return (optional)
   * returns List
   **/
    
  db.collection(FEEDBACKS_RESULTS_COLLECTION).find({}).toArray(function(err, docs) {
        if(err) {
            handleError(res, err.message, "Failed to get feedbacks results");
        }else{
            res.status(200).json(docs);
        }
    });
}