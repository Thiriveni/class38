var  database;

var gameState=0;
var form,player,game;

var playerCount;

var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img;


function setup(){
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  
  

  
}

function draw(){
  if(playerCount===4){
      game.update(1);
  }

  if(gameState===1){
    game.play();
    
  }
 
}

