var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("Hey...hey...we are the Monkeys");
});

router.get('/all', function(req,res){
    res.send("I really do not know the rest of the lyrics");
});

module.exports = router;