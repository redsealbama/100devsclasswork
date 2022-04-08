//Create a constructor with 4 properties and 3 methods
function BestPizza(bestTopping,bestSize,bestCrust,bestShape){
    this.topping = bestTopping
    this.size = bestSize
    this.crust = bestCrust
    this.shape = bestShape
    this.cookTime = function(){
        console.log(`The cooktime for this pizza depends on its ${this.topping} and ${this.size}`)
    }
    this.delivery = function(){
        alert('The delivery time depends on a variety of things')
    }
}

//leons example

function PizzaMachine(size,topping,crust,sauce){
    this.size = size
    this.topping = topping
    this.crust = crust
    this.sauce = sauce
    this.estimatedDeliveryTime = function(){
        console.log('Calculating...')
    }
    this.burnMouth = function(){
        console.log('AHHHHHH!!!!')
    }
    this.frisbee = function(){
        console.log('Yyyyyyeeeeeettttt')
    }
}

let pizza = new PizzaMachine('large',['pineapple', 'chicken'], 'deep dish', 'bbq')

//example prototype

PizzaMachine.prototype.cheese = false

//to declare use pizza.cheese 