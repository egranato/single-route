var express = require('express');
var router = express.Router();
var queries = require('../data/queries');

router.get('/', function(req, res, next) {
    queries.getCards().then(function(cards){
        res.render("cards", {
            cards: cards
        });
    }).catch(console.error)
});

router.get('/new', function(req, res, next) {
  res.render('new-card');
});

router.post('/', function(req, res, next) {
  queries.addCard(req.body).then(function(){
      res.redirect("cards");
  }).catch(console.error)
});

module.exports = router;
