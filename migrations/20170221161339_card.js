exports.up = function(knex, Promise) {
    return knex.schema.createTable("card", function(card){
        card.increments();
        card.string("name");
        card.integer("manaCost");
        card.string("pictureUrl");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("card");
};
