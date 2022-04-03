// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'thanksgiving'
console.log(holiday.toUpperCase);
holiday = 'christmas';
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let randomVar = 'jakethesnake'
alert(randomVar.length -3);
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFiveNumbers(n1,n2,n3,n4,n5){
    Math.abs(100 - n1 - n2 - n3 - n4 - n5)
}
alert(20,30,40,50,60);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeThreeNumbers(num1,num2,num3){
    let lowestToHighest
    console.log()
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(string){
    if(string.toUpperCase === "Heads"){
        return('Heads')
    } else if (string.toUpperCase === 'Tails'){
        return('Tails')
    }
}
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlipFlipadelphia(n){
    for(let i = 1; i <= n; i++){
        let result 
    }
}