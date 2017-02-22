var database = require("./database-connection");

module.exports = {
    getCards: function(){
        return database("card").select("*");
    },

    getCard: function(id){
        return database("card").first().select("*").where("id", id);
    },

    addCard: function(card){
      return database("card").insert(card);
    },

    deleteCard: function(id){
      return database("card").delete().where("id", id);
    },

    editCard: function(id, card){
      return database("card").update(card).where("id", id);
    }
}
