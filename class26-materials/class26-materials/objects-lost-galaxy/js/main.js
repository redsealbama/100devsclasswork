//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.topping = ['Pepperoni', 'Spinach', 'Onion', 'Pineapple']
pizza.shape = 'Circle';
pizza.size = 'Large';
pizza.slices = 8;
pizza.crust = 'stuffed'

// methods
pizza.cookTime = function(time) {
    console.log(`The pizza was cooked for ${time}`)
}
pizza.spins = function(spins) {
    console.log(`We had to spin the pizza in the oven ${spins}`)
}
pizza.estimatedDeliveryTime = function(){
    console.log(`Calculating...`)
}
pizza.burnMouth = function(){
    console.log('fdsajfkdls;fjsad')
}

// Above is a object made with literal {}

