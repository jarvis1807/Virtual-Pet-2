//Create variables here
var dog, happyDog, database, foodS, foodStock
var feed, addFood
var  fedTime, lastFed;
var foodObj

function preload()
{
  dogimg = loadImage("images/Dog.png")
  happyDogimg = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(1000, 500);
  foodObj = new Food();
  dog = createSprite(800,220,150,150)
  dog.addImage(dogimg)
  dog.scale = 0.15

  feed = createButton("Feed the dog")
  feed.position = (700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value", readStock)
}
   
  function draw() {
  background("green")  

  if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogimg)
  }

  fedTime = database.re("FeedTime")
  fedTime.on("vallue", function(data){
    lastFed = data.val()
  })

  fill(255)
  textSize(20)

  if(lastFed >= 12){
    text("Last feed: "+ lastFed % 12 + " PM", 350, 30)

  }
  else if(lastFed == 0){
   text ("Last Fed: 12 AM", 350, 30);

  }
  else {
    text("Last Feed: " + lastFed + " AM", 350, 30)
  }
  foodObj.diaplay()

  drawSprites();
  text("food remaining: "+foodS, 150,200)
}
  function readStock(data){
    foodS = data.val()

  }
  function feedDog(){
    dog.addImage(happyDog)
    foodObj.updateFoodStock(foofObj.getFoodStock()-1)
    database.ref('/').update({
      Food: foodObj.getFoodStock(),
      FeedTime: hour()
    })
  }
  function addFoods(){
    foodS ++
    database.ref('/').update({
      Food:foods
    })

  }

  


  
  


