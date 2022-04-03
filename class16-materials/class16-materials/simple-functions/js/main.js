//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(num1, num2){
    alert(num1 - num2)
}
subtract(50-30)
//create a function that divides three numbers and console logs the quotient
function divide(div1, div2, div3){
    console.log(div1 / div2 / div3)
}
divide(1, 2, 3)
//create a function that multiplys three numbers and returns the product
function multiply(mult1, mult2, mult3){
    return mult1 * mult2 * mult3
}
multiply(1, 2, 3)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder(modulus) of dividing the sum of the first two numbers by the third number
// we wrap med1 and med2 in parethesis because of PEMDASd
function medium(med1, med2, med3){
    return (med1 + med2) % med3
}
medium(1, 2, 3)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
