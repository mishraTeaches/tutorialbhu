var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var user=require('../model/user');
var cors = require('cors');
mongoose.Promise = global.Promise;
var User = mongoose.model("User", user);
var db=mongoose.connect("mongodb://ishu:ishu%40gla123@ds141697.mlab.com:41697/mishratutorial", { 
        useNewUrlParser: true
    }, function(err, db) {
if(err){
    console.log('eror connecting database' +err);
}else{

    console.log('connected');
}

    }
);
// var db= mongojs('mongodb://ishu:ishu@gla123@ds141697.mlab.com:41697/mishratutorial',['feedbacks'])
router.post('/addFeedback',cors(),function(req,res,next){
    var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
// res.status(200).send({'res':'Feedback addedd successfully!'})
});

router.get('/feedbacks',function(req,res,next){
    User.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json({'response':result});
        }
      });
  
});

module.exports=router;