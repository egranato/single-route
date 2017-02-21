exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE card RESTART IDENTITY CASCADE")
    .then(function () {
      return knex('card').insert([{
            id: 1,
            name: "Black Lotus",
            pictureUrl: "http://static.starcitygames.com/sales/cardscans/MTG/2ED/en/nonfoil/BlackLotus.jpg",
            manaCost: 0
        },{
            id: 2,
            name: "Colossus of Sardia",
            pictureUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=221291&type=card",
            manaCost: 9
        },{
            id: 3,
            name: "Glimpse the Unthinkable",
            pictureUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83597&type=card",
            manaCost: 2
      }]);
    });
};
