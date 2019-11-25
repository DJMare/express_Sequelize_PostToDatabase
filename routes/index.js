var express = require('express');
var router = express.Router();
// require mysql2
const mysql = require('mysql2');
// require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Add get() route for /actors
router.get('/actors', function(req, res, next) {
  models.actor.findAll({}).then(actorsFound => {
    res.render('actors', {
      actors: actorsFound
    });
  });
});
//Add post() route
router.post('/actor', (req, res) => {
  models.actor
    .findOrCreate({
      where: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/actors');
      } else {
        res.send('This actor already exists!');
      }
    });
});

module.exports = router;
