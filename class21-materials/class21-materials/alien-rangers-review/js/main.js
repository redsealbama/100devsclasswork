// //Arrays

// //Create and array of tv shows. Loop through and print each show to the console
// const tvShows = ['witcher1','witcher2','witcher3'];
// console.log(tvShows);
// //Create and array of numbers
// const numbers = [1,2,3,4,5];

// //Return a new array of numbers that includes every even number from the previous Arrays
// const newArr = []
//     if(numbers % 2 === 0){
//         newArr = "Even"
//     } else newArr = "Odd"

// //Create a function that takes in an array of numbers
// function arrayFunction(arrNum){

// }

// //Alert the sum of the second lowest and the second highest number

//Create and array of tv shows. Loop through and print each show to the console
let powerRangers = ['Mighty Morphin', 'Alien Rangers', 'Zeo']

powerRangers.forEach( show => console.log( show ) ) //run once for each element in the array. Each time it runs the goblin .forEach grabs these elements and plugs it into the show.

//Create and array of numbers
let nums = [21,56,88,24,99,710]
//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = arr => arr.filter( n => n % 2 === 0 )  // filter runs through each element in the array, and if it is true, it adds it to the array. arr is our parameter for our function If n modulus 2 === 0

console.log(onlyEvens(nums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr){
    
}