const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

// username
var userName = readlineSync.question("What is your name? ");
console.log("________________");

// welcome
console.log(chalk.bgCyan("Welcome " + userName +
" to this amazing quiz to cheack whether you know about Rajul or not?")+"\n"+chalk.magenta("you are currently in level 1 proceed ......."));
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
  question:"which is my favourite color ? ",
  answer:"blue",
},
{
  question:"what is my fav sad song? ",
  answer:"dil",
},
{
  question:"what is the name of my pet? ",
  answer:"cherry",
},
{
  question:"what is the name of my first crush? ",
  answer:"shubhangni",
},
{
  question:"with whom I ride a motorbike for the first time ? ",
  answer:"abhay",
},
{
  question:"what is my birthday date? ",
  answer:"10",
},
{
  question:"which food receipe I love the most? ",
  answer:"paneer",
},
{
  question:"how much I have scored in my 10th? ",
  answer:"9",
},
];


// function gameplay

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  console.log(chalk.bgYellow("Player entered : " + userAnswer));
  if(userAnswer===answer){
    score = score + 1;
    console.log(chalk.magenta("right, your score is : " + score));
  }
  else{
    console.log(chalk.magenta("no , you are wrong"));
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
if(userWantToKnow === "y"){

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