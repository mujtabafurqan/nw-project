const express = require("express");
const questionModel = require("../model/question");
 
// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /question.
const questionRoutes = express.Router();
  
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the questions.
questionRoutes.route("/question").get(function (req, res) {
//  let db_connect = dbo.getDb("buildspace");
//  db_connect
//    .collection("questions")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
  
  questionModel.find({}, (err, questions) => {
    res.send(questions);
  });  
});
 
// This section will help you get a single question by id
questionRoutes.route("/question/:id").get(function (req, res) {
 let db_connect = dbo.getDb("buildspace");
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("questions")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new question.
questionRoutes.route("/question/add").post(function (req, response) {
 let myobj = {
   title: req.body.title,
   description: req.body.description,
   potName: req.body.potName,
 };
 questionModel.create(myobj, function (err, result) {
    if (err) throw err;
    console.log("1 document inserted");
    response.json(result);
  });
  
});
 
// This section will help you update a question by id.
questionRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb("buildspace"); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
     name: req.body.name,    
     position: req.body.position,     
     level: req.body.level,   
   }, 
  }
});
 
// This section will help you delete a question
questionRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb("buildspace");
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("questions").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = questionRoutes;