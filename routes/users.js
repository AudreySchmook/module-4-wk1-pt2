var express = require('express');
var router = express.Router();



router.get('/', function(req,res){
  res.send("Print out user list.");
});

router.get('/:username', function(req,res){
  var name = req.params.username;
  res.send("Hello " + name + ", your request is being processed...");
})

router.get('/:username/:location', function(req,res){
  var name = req.params.username;
  var loc = req.params.location;
  res.send("Hello " + name + ", you\'re at " + loc);
})

module.exports = router;
