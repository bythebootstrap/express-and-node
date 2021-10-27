var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Worlds' });
});

//GET about page.
router.get('/about', function (req, res) {
  res.render('about', { title: 'Hello There!' });
});

module.exports = router;
