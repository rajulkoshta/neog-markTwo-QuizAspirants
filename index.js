const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

// username
var userName = readlineSync.question("What is your name?\n :");
console.log("________________");

// welcome
console.log(chalk.bgCyan("Welcome " + userName +
" to this amazing quiz to cheack whether you know about the aspirants series or not?")+"\n"+chalk.magenta("you are currently in level 1 proceed ......."));
console.log("________________");



//high scoreres
var highScore = [
  {
    name:"abhay",
    score:7,
  },{
    name:"balveer",
    score:6,
  },{
    name:"shantanu",
    score:5
  }
  ]
// question bank
var questions = [{
  question:"Which production house created the web series Aspirants ? \na.Dice Media \nb.AIB \nc.The Viral Fever \nd.East India Comedy\n ",
  answer:"c",
},
{
  question:"What is the name of the (or Who is the) senior living in the room next to Abhilash’s? \na.Sandesh Bhaiyya \nb.Sandeep Bhaiyya \nc.Pardeep Bhaiyya \nd.Ramesh Bhaiyya\n ",
  answer:"b",
},
{
  question:"Dhairya marries Walia Uncle in the show. \na.True \nb.False\n",
  answer:"b",
},
{
  question:"Who is getting married in the series?\na.SK\nb.Sandeep Bhaiyya\nc.Guri \nd.Walia Uncle\n",
  answer:"c",
},
{
  question:"Abhilash is the DM of which city?\naDelhi\nb.Kanpur\nc.Kashipur\nd.Rampur\n",
  answer:"d",
},
{
  question:"Which place in the series is considered a hub for UPSC coaching?\na.Rajeev GandhiNagar\nb.Rajendra Nagar\nc.Vikaspuri\nd.Mayapuri\n",
  answer:"b",
},
{
  question:"Abhilash, SK, and Guri were called Table in college.\na.True\nb.False\n",
  answer:"b",
},
{
  question:"Sandeep Bhaiyya passes the ___ exam at the series’ end.\na.UPSC\nb.JEE\nc.PCS\nd.RRB\n",
  answer:"c",
},
{
  question:"Who says “Plan B Hona Chaahiye Bhai Abhilash, Bahut Zaroori Hai”?\na.Abhilash’s PA\nb.SK\nc.Guri\nd.Walia Aunty\n",
  answer:"b",
},
{
  question:"Where does Abhilash meet Dhairya for the first time?\na.Admission office\nb.Library\nc.Movie Theatre\nd.Tea stall\n",
  answer:"a",
},
];


// function gameplay

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  console.log(chalk.bgYellow("Player entered :" + userAnswer));
  if(userAnswer===answer){
    score = score + 1;
    console.log(chalk.magenta("Right, your current score is : " + score));
  }
  else{
    console.log(chalk.magenta("wrong, your current score is : " + score));
  }
  console.log("________________")
}

//loop to call function
for(var i=0; i < questions.length ; i++){
  if(i===questions.length/2){
    console.log("you are upgraded to level 2 , congratulations");
    console.log("________________")
  }
      var currentQuestion = questions[i];
      play(currentQuestion.question,currentQuestion.answer);
}

console.log("your final score: " + score);

// if user want to know high score
var userWantToKnow = readlineSync.question("do you want to know the high scores?(y/n) ");
var count = 0;
if(userWantToKnow==="y"){

   for(var j = 0 ; j < highScore.length ; j++){
    
     var currentHighScore = highScore[j];
     console.log(chalk.bgGreen(currentHighScore.name + ":" + currentHighScore.score));
   
   if(score > currentHighScore.score){
   count = count+1;
 
 }
}
if(count===3){
   console.log(chalk.bgBlue("congratulations ! you are the high scorer, send me the screenshot"));
} 
}