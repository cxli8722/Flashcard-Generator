// Constructor function for creating CastMember objects
var flashCardCon= function(front, back) {
  //property for the front of the card
  this.front=front;
  //property for the back of the card
  this.back=back;
};

  var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


// Exporting our CastMember constructor. We will require it in movie.js
module.exports = BaicCard;
