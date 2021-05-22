var readlineSync = require("readline-sync");
var score=0;
var highScore=[
   {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]
function welcome(){
var userName=readlineSync.question("what is your name? ");
console.log("welcome " + userName + " do you know vandana");}

//  play function
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer==answer){
    console.log("right");
    score=score+1;

  }
  else{
    console.log("wrong");
  }
  console.log("current score",score)

}


//array of abjects
var que=[{que:"what is my fav food: ",ans:"pizza"},{
  que:"what do I like most: ",ans:"reading"
},{
  que: "what is my fav color: " , ans:"blue"
}];

//loop
function game(){
for(var i=0;i<que.length;i++){
var currentQue=que[i]; 
play(currentQue.que,currentQue.ans)}}

function showScore(){
  console.log("yay! you scored",score);
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
highScore.map(score=>console.log(score.name,":",score.score))
}
 
 welcome();
 game();
 showScore();
