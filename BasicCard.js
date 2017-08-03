var fs=require("fs");

// Constructor function for creating CastMember objects
var BasicCard= function(front, back) {
  //property for the front of the card
  this.front=front;
  //property for the back of the card
  this.back=back;

  this.createCard= function (){
    //a way to store data using object and  appdFile to card.text 
   var cardData={
    front: this.front,
    back: this.back,
    choice: "basicCard"
  };


  fs.appendFile("cardData.txt", JSON.stringify(cardData) + ";", "utf8", function (err){
 // If an error was experienced we say it.
  if (err) {
    console.log(err);
  };
});

};
};


// testing to see if it work 
 var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
 var firstPresidentB = new BasicCard("Who was the second president of the United States?", "sdkfajs");

firstPresident.createCard();

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 
// Exporting our basicCard constructor. We will require it in ClozeCard.js
module.exports = BasicCard;
