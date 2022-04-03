//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoNumbers(sub1, sub2){
    alert(sub1 - sub2)
}
subtractTwoNumbers(10,5);
function test (test1, test2){
    alert(test1 - test2)
}
//create a function that divides three numbers and console logs the quotient
function divideThreeNumbers(div1, div2, div3){
    console.log(div1 / div2 / div3)
}
divideThreeNumbers(10, 20, 30)
//create a function that multiplys three numbers and returns the product
function multiplyThree(mult1, mult2, mult3){
    return(mult1 * mult2 * mult3)
}
multiplyThree(5,10,15) // this value is stored for later
// to bring it out
let returnedNum = multiplyThree
console.log(returnedNum); // now the value of multiplyThree is going to print out to the console 
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThreeNumbers (num1, num2, num3){
    return((num1 + num2) % num3)
}
takeThreeNumbers(10,20,30) 
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
// function takeFourNumbers(nm1, nm2, nm3, nm4){
//     if()
// }