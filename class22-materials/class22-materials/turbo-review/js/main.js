// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let favDrink = 'coffee'
// console.log(favDrink);


//his code
let favDrink = 'coffee'
favDrink = favDrink.trim()
console.log(favDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let multiWords = "banana cat in the hat apple"
// function check(multiWords){
//     if(multiWords === 'apple')
//     console.log('true')
// }

//his code
// let str = 'Bob Duck Apple Dog'
// console.log ( str.search('phone') !== -1 ){


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPaperScissors(){
//     const randomNum = Math.floor(Math.random()*3);
//     if (randomNum === 0){
//         return 'rock';
//     } else if (randomNum === 1){
//         return 'scissors'
//     } else if (randomNum === 2){
//         return 'paper'
//     }
// }
// console.log(rockPaperScissors)

//his code
function rockPaperScissors(){
    let random = Math.random()
    if (random < 0.33 ){
        return 'rock'
    } else if (random < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rockPaperScissors() // call the function above to determine random generated rock paper scissors
    if((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'scissors')){
        console.log('You Win')
    } else if ( playerChoice === botChoice){
        console.log('You Tied')
    } else{
        console.log('You Lose')
    }
}
checkWin('rock')



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
