
var fs = require("fs");


var ClozeCard= function(text, cloze){
//only contains the the cloze-deleted portion of the text 
this.cloze=cloze;
//fulll text property 
this.text=text;

//only partial text 
this.partial= this.text.replace(this.cloze, "...");




this.create=function(){
	var clozeData ={
		text: this.text,
		cloze: this.cloze,
		partial: this.partial,
		choice: "clozeDeleted"
	};

	//add to 
  fs.appendFile("clozedData.txt", JSON.stringify(clozeData) + ";", "utf8", function (err){
 // If an error was experienced we say it.
  if (err) {
    console.log(err);
    			};
   });

};
};  

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
firstPresidentCloze.create();
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 
 // "George Washington was the first president of the United States.
console.log(firstPresidentCloze.text)




module.exports=ClozeCard;
