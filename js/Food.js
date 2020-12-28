class Food{
    constructor(){
        this.foodStock = 15;
        this.lastfed
        this.image = loadImage("images/Milk.png")
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock
    }
     
    getFedTime(lastFed){
        this.lastFed = lastFed
    }

    deductFood(){
        if(this.foodStock > 0)(
            this.foodStock = this.foodStock -1
        )
        return this.foodStock
    }

    getFoodStock(){
        return this.foodStock
    }


display(){
    var x = 80, y = 100;

    imageMode(CENTER)
    image(this.image,720,220,70,70)
} 


