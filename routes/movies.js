var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');


function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// INDEX
router.get('/', function(req, res, next) {
  Movie.find({})
  .then(function(movies) {
    res.render('movies/index', { movies: movies });
  });
});

module.exports = router;
