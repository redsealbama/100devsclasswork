// *Variables*
// Create a variable and console log the value
let num = 10;
console.log(num);
// Create a variable, add 10 to it, and alert the value
let addNum = 10;
addNum = addNum + 10;
alert(addNum);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
subtractFour(10,20,30,40)
// Create a function that divides one number by another and returns the remainder(modulus)
function divideOne(n1,n2){
    return n1 % n2
}
console.log(divideOne(10,20)); // remember you  must call your function. We added console.log so we could see it. Return simply stores it.

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(n1,n2){
    if(n1 + n2 > 50){
        alert('Jumanji')
    }
}
addTwo(10,5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA. Remember product here.
function multiplyThree(n1,n2,n3){
    let product = n1 * n2 * n3;
    if(product % 3 === 0){
        alert('Zebra')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in. 
function takeWordNumber(word,num){
    for(let i = 1; i <= num; i++){  // so if i is less than or equal to num (our parameter in our function), console.log the word
        console.log(word)
    }
}
takeWordNumber('wondeful', 21)