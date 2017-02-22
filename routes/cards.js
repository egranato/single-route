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

router.get('/:id', function(req, res, next) {
    queries.getCard(req.params.id).then(function(card){
        res.render("card", card);
    }).catch(console.error)
});

router.get('/new', function(req, res, next) {
  res.render('new-card');
});

router.get('/edit/:id', function(req, res, next) {
  queries.getCard(req.params.id).then(function(card){
      res.render("edit-card", card);
  }).catch(console.error)
});

router.put('/:id', function(req, res, next) {
  queries.editCard(req.params.id, req.body).then(function(){
      res.redirect("/cards");
  }).catch(console.error)
});



router.post('/', function(req, res, next) {
  queries.addCard(req.body).then(function(){
      res.redirect("cards");
  }).catch(console.error)
});



router.delete('/:id', function(req, res, next) {
  queries.deleteCard(req.params.id).then(function() {
      res.redirect("/cards");
  }).catch(console.error)
});

module.exports = router;
