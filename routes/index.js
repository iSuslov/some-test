var express = require('express');
const sayGreetings = require('../services/mainService');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: `Express with Docker! ${sayGreetings('Ivan')}`, env: process.env.NODE_ENV });
});

module.exports = router;



