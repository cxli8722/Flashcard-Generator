
var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');
// Load the NPM Package inquirer
var inquirer = require("inquirer");

var fs = require('fs');

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([

    
    // given the user a list to choose from.
    {
      type: "list",
      message: "Do you want to create or read flashcard?",
      choices: [ "create", "read"],
      name: "userOptions"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(result) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (result.confirm && result.userOptions=== 'create') {
      console.log("okay you want to " + result.userOptions);
      createCard();
     
    }
    else if (result.confirm && result.userOptions=== 'read'){
    	   console.log("okay you want to " + result.userOptions);
    		readCard();
    	}
    else {
      console.log(" come again when you are more sure.\n");
    }
  });



var createCard= function(){
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([

    
    // given the user a list to choose from.
    {
      type: "list",
      message: "what type of flashcard you want to create",
      choices: [ "bsic-flashcard", "cloze-flashcard"],
      name: "cardType"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(result) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (result.confirm && result.cardType=== 'bsic-flashcard') {
      console.log("okay you want to create " + result.cardType);

      //----------------------------------------------------------

      //asking user to enter their question and answer 
      inquirer
			  .prompt([

			    

			    // given the user a list to choose from.
			    {
			    	type: "input",
				    name: "frontCard",
				    message: "please type your question",

				    //validating to see if ureser enter a question 
				    
				   validate: function validateQuestion(name){
       					 if (name === ""){
       					 	console.log('please enter your question')
       					 	return false 
       					 }
       					 else {
       					 	return true 
       					 }
  						}
			    },

			    {
			      type: "input",
			      name: "backCard",
			      message: "plase type your answer",

			        validate: function validateQuestion(name){
       					 if (name === ""){
       					 	console.log('please enter your answer')
       					 	return false 
       					 }
       					 else {
       					 	return true 
       					 }
  						}
			    },
			    // Here we ask the user to confirm.
			
			  ])
			  .then(function(result) {
			    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
			    
			    var basicFlashcard = new BasicCard( result.frontCard, result.backCard);
			 	basicFlashcard.createCard();
			 	console.log(basicFlashcard)
			      
			 	
 				 });








//------------------------------------------------------------------------------


     
    }
    else if (result.confirm && result.cardType=== 'cloze-flashcard') {
      console.log("okay you want to create " + result.cardType);




      //--------------------------------------



      //asking user 
      inquirer
			  .prompt([

			    

			    // given the user a list to choose from.
			    {
			    	type: "input",
				    name: "text",
				    message: "please enter your full sentence",

				    //validating to see if ureser enter a question 
				    
				   validate: function validateQuestion(name){
       					 if (name === ""){
       					 	console.log('\n Error: please enter your sentence')
       					 	return false 
       					 }
       					 else {
       					 	return true 
       					 }
  						}
			    },

			    {
			      type: "input",
			      name: "cloze",
			      message: "please enter the portion you wish to delete",

			        validate: function validateQuestion(name){
       					 if (name === ""){
       					 	console.log('\nerror: please enter your delete phrase(s)')
       					 	return false 
       					 }
       					 else {
       					 	return true 
       					 }
  						}
			    },
			    // Here we ask the user to confirm.
			
			  ])
			  .then(function(result) {
			    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
			    
			    var clozeFlashcard = new ClozeCard( result.text, result.cloze);
			 	clozeFlashcard.create();
			 	console.log(clozeFlashcard)

 			});
      //-----------------------------------------------------
  }
     
    else {
      console.log(" come again when you are more sure.\n");
  }
  });
}

var readCard = function() {

	fs.readFile("BasicCard.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});


};