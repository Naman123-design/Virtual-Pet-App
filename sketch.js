//Create variables here
var dog, happyDog, databse, foodS, foodStock;
var dogImg, happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,100,100);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  //add styles here
textSize(28);
fill(255);
stroke(3);
text("Press UP_ARROW Key To Feed Drago Milk", 5,70);
text("Food left  : " + foodS,5,120);
}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){

if(x<=0){
  x= 0
}else{
  x = x-1
}

  database.ref('/').update({
    Food:x
  })
}

