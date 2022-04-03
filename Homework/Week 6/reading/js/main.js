// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// Must do while and for loop

// //while loop 
// let turns = 1;
// while (turns <= 10) {
//     console.log(turns);
//     turns++;
// }

// //for loop
// // initialization; condition; final expression
// // turns = 1 is our initial counter, condition is how many times we want the carousel to turn, 
// // final expression is turns going up by 1 every time with ++
// let turn;
// for (turns = 1; turns <=10; turns++ ){
//     console.log(turns);
// }
// // the variable used during initilization, condition, and the final expression is called a counter and
// // is often named i. This counter can be declared in the loop initalization to limit its swcope to the
// // loop body
// for(let i =1; i <= 10; i++){
//     console.log(i);
// }

//allow the user to input a number, use that number to determine the number of turns the carousel makes.
// let turn = prompt("How many times will the carosel turn?:");
// let turns = 0;
// while (turns <= turn ){
//     console.log(turns);
//     turns++;
// }
// First we declare two variables turn and turns. One prompts the user for a value. 
// Next, we declare turns as 0 as a starting point.
// While turns is less than turn, console log it and then incriment it by one until the value is reached.

//Improve this program so it only shows odd numbers.
// First we initilize i with 1, then we add a condition so it only shows 10 numbers, then a final expression (repeats)
// if the divided remainder of i
// for (let i = 1; i <=10; i++){
//     if (i % 2 === 0){
//         console.log(`${i} is even`);
//     }
// }

// //to make it odd we change the if statement to where i modulos 2 === 1 
// // then console log the value of i is odd. Because if i % 2 has a remaining value of 1, it is odd. 
// for (let i = 1; i <=10; i++){
//     if (i % 2 === 1){
//         console.log(`${i} is odd`);
//     }
// }

//Now improve it again to replace the ititial number 1 by a number given by the user.
// we will do this by a variable 
// for (let i = prompt("Please enter a number:_"); i <=10; i++){
//     if (i % 2 === 0){
//         console.log(`${i} is even`);
//     }
//     else if (i % 2 === 1){
//         console.log(`${i} is odd`);
//     }    
// }
// first we create a for loop that has a nested variable i with a value inputted from the user for initilization
// then we add a condition i <=10 which means that it will only go to 10 numbers.
// then we have a final expression i++ which increments i until the condition is met. repeats.
// if the remainder of the value of i % 2 === is equal to 0, then write out in the console log that i is even
// if the remainder of the value of i % 2 === is equal to 1 (remainder of 1), then write out in the console log that i is odd.

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100
// This will be done using a while loop
// let number = "";
// while (number >= 100){
//     number=prompt("Please enter a number less than 100")
// }
// Now I will improve the program so it only accepts numbers between 50 and 100
// let number = "";
// while (number <= 50 || number >= 100){
//     number = prompt("Please enter a number between 50 and 100")
// }
// remember, here you are wanting to prompt until a number between 50 and 100 condition is met
// so if the number is LESS THAN OR EQUAL TO 50 or the number is GREATER THAN OR EQUAL TO 100, then run number prompt.

// Write a program that asks the user for a number, then shows the multiplication table for this number.
// I feel a while loop is required here. 
// //while loop 
// let turns = 1;
// while (turns <= 10) {
//     console.log(turns);
//     turns++;
// }
// first we prompt the user for a number and assign it to a variable
// let i = prompt("Please enter a number")
// let multi = 1;

// for(let i = 1; i <= 10; ++i) {
//     console.log(`${multi} times ${i} = ${i * multi}`)
// }

//Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user
// to enter text until either "yes" or "no" is typed, which ends the game.
// let text = "";
// while (text !== "yes" || text !== "no"){
//     text = prompt("Please enter yes or no to exit:");
// }
// let letter = "";
// while (letter !== "yes" && letter !== "no") {
//   letter = prompt("Type a letter or X to exit:").toLowerCase();
// }

//Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3
// It shows "Buzz" instead if the number is divisible by 5
// It shows "FizzBuzz" if the number is divisible by 3 and 5

// function FizzBuzz (num){
//   for(i = 1; i <= num; i++){
//     if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz")
//     else console.log(i)
//   }
// }
// FizzBuzz(50)
// // Lets break this down
// First we declare a function FizzBuzz and give it a parameter of num (number) to call later
// Next we write a for loop with the initial integer set to 1, then a conditon that if i <= number from the function
// then add one to the integer as the final expression until the for loop condition is finally false
// if i % 3 === 0 that means that 3 is divisible by the integer and "fizz" is printed out.
// if i % 5 === 0 that means that 5 is divisible by the integer and "buzz" is printed out.
// if both conditions are true, then "FizzBuzz" is printed instead. 
// otherwise, just print out the number. 

function FizzBuzz(num){
  for(i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  } 
}
FizzBuzz(100);