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

  fooStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARRPOW)){
  writeStock(foodS);
  GainNode.addImage(happyDogImg);
}
  drawSprites();
  //add styles here
textSize(32);
fill(255);
stroke(3);
text("Press UP_ARROW Key To Feed Drago Milk", 50,70);

}

function readStock(){
  foodS = data.val()
}

function writeStock(){

if(x<=0){
  x= 0
}else{
  x = x-1
}

  database.ref('/').update({
    Food:x
  })
}

