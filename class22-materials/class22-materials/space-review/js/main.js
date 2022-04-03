//Arrays

// let nums = [2,3,4]

// nums[0] // 2

// nums[0] = 15 // This changes index 0 of our array. 15,3,4


//Create and array of numbers. Sum all of the numbers. Alert the sum.
// const newArr = [2,3,4,5]
// let sum = 0; //our sum variable

// for(let i = 0; i < Array.length; i++){ //our integer starts at 0, if i is less than the length of the array, incremenet by one
//     sum += array[i] // instructions every time this for loop runs
// }
// console.log(sum)

//reduce method and his code
// let nums = [42,19,77,33, 57]

// let sum = nums.reduce( () => )   //reduce runs once for each element in our array. You get the acculimilator and current value with reduce

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let nums = [1,2,3,4,5]

// let sum = nums.reduce( (acc,c) => acc + c, 0)
// alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// new array is key here
let nums = [40,20,70,30,50]
function squareNums(){
    return nums.map( n => n * n) // .map takes the array of nums seen on line 33
}
// or can do this
//let numsSquared = nums.map( n => n * n)
console.log(numsSquared);


//Create a function that takes string
//Print the reverse of that string to the console
// .split takes our string and makes it an array. example 'car' is [c,a,r]
// .reverse reverses our array. so our [c,a,r] turns into [r,a,c]
// .join turns our reversed array back into a string
// .split and .join can take in a value. They are like glue, whatever you put in between the '' will be in between what you are joining.
function reverseString(str){
    let reverseStr = str.split('').reverse().join('')
    console.log(reverseStr)
}
reverseStr('car')
// to reverse the entire word, have a space in between .split!!!
reverseStr('My car is dope')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindrome = s => s === s.split('').reverse().join('') ? alert ('Yes') : alert ('No')

// I am using an arrow function and a ternary (compares two)
// If the string === to the string reversed, then alert yes. otherwise alert no 

// Longer way, but more readable for now.
function isPalidrome(str){
    let reverseStr = str.split('').reverse().join('')
    if(str === reverseStr){
        alert('Yes')
    } else{
        alert('No')
    }
}
isPalidrome('bob')