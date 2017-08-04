
var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');
// Load the NPM Package inquirer
var inquirer = require("inquirer");

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
    else if (result.confirm && result.userOptions=== 'read')
    	   console.log("okay you want to " + result.userOptions);
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



      //asking user to enter their question and answer 
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
       					 	console.log('please enter your sentence')
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
			      message: "please enter phrase(s) you wish to delete from your sentence",

			        validate: function validateQuestion(name){
       					 if (name === ""){
       					 	console.log('please enter your your delete phrase(s)')
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

// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Check-box,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// // ========================================================================
// // Load the NPM Package inquirer
// var inquirer = require("inquirer");

// // Created a series of questions
// inquirer.prompt([

//   {
//     type: "input",
//     name: "name",
//     message: "Who are you???"
//   },

//   {
//     type: "list",
//     name: "doingWhat",
//     message: "What are you doing in my house??",
//     choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
//   },

//   {
//     type: "checkbox",
//     name: "carryingWhat",
//     message: "What are you carrying in your hands??",
//     choices: ["TV", "Slice of Toast", "Butter Knife"]
//   },

//   {
//     type: "confirm",
//     name: "canLeave",
//     message: "Can you leave now?"
//   },

//   {
//     type: "password",
//     name: "myPassword",
//     message: "Okay fine. You can stay. But only if you say the magic password."
//   }

// ]).then(function(user) {

//   // If the user guesses the password...
//   if (user.myPassword === "myHouse") {

//     console.log("==============================================");
//     console.log("");
//     console.log("Well a deal's a deal " + user.name);
//     console.log("You can stay as long as you like.");
//     console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
//     console.log("");
//     console.log("==============================================");
//   }


//   // If the user doesn't guess the password...
//   else {

//     console.log("==============================================");
//     console.log("");
//     console.log("Sorry " + user.name);
//     console.log("I'm calling the cops!");
//     console.log("");
//     console.log("==============================================");

//   }
// });
