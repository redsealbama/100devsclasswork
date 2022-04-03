//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeCharacter(charClass, charRace, charStrength, charMagic){
    this.class = charClass
    this.race = charRace
    this.strength = charStrength
    this.magic = charMagic
}
this.fight = function(){
    alert(`You called? Time to ${this.fight} fight!`)
}
this.closing = function(){
    alert(`You knew you were going to lose. Now I can ${this.closing} be at peace.`)
}
let chunLi = new MakeCharacter('Fighter', 'Elf', 20, 10)


// example
// objects are a collection of variables and functions
// for objects being built out, variables are properties and functions are methods. These are TIED to the OBJECT DRINK

let drink = {}

drink.brand = 'Gatorade'
drink.size = '20 fl oz'
drink.color = 'Yellow'
drink.hasAlcohol = false
drink.pour = function(){
    console.log('Now it is all over the floor')
}
