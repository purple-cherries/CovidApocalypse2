var bg, player1, PCLvl1,drops
var gameState = 0
var lives = 3
var score = 0
var intro, PlayButton;
var game, Background

function preload(){
 bg = loadImage("PCs/BackgroundLvl1.jpg")
player1 = loadImage("playerLvl1.png")
dropIMG = loadImage("Vaccine.png")
Play = loadImage("PlayButton.png")
germIMG = loadImage("Germ.png")
}

function setup(){
 database = firebase.database();
canvas = createCanvas(displayWidth, displayHeight-200)
game = new Game();
game.getState();
game.start();




 
}

function draw(){
  background("cream")

  if(gameState=== 1){
    game.Level1()
  }

}


