/
var BasicCard = require('./basic-flashcard.js');

var ClozeCard = require('./cloze-flashcard.js');
//  command line
var inquirer = require('inquirer');
// require fs
var fs = require('fs');

inquirer.prompt([{
    name: 'command',
    message: 'Do you want to create card or read card?',
    type: 'list',
    choices: [{
        name: 'Create flashcard'
    }, {
        name: 'Read Flascard'
    }]
}]).then(function(answer) {
  
});
