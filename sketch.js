var canvas;
var database;
var quiz;
var gameState = 0, contestantCount,  question, person, allPeople;
var backgroundColor = "pink";


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
 
}


function draw(){
  background(backgroundColor);

  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }

  
//remember to CALL play() here with some expression or condition
}
