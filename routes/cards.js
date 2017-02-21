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

module.exports = router;
