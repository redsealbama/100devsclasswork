// // Write a program that displays your name and age. 
// console.log("Jake");
// console.log(27);

// // Write a program that displays the results of adding, subtracting, multiplying, and dividing 6 by 3
// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);

// // Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
// const input = prompt("Enter your first and last name:");
// alert(`Hello, ${input}`);

// //Observing
// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price
// using a VAT rate of 20.6%
// let rawPrice = prompt("What is the raw price?:");
// console.log(rawPrice + (20.6 / 100));

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// const temp = prompt("What is temp in C?:");
// console.log(temp * (9/5) + 32);

//Write a program that accepts a day name from the user, hten shows the name of the following day. Incorrect inputs must be taken into account.
// let day = String(prompt("Enter what day of the week it is"));

// if (day === "Monday"){
//     console.log("Tuesday");
// } else if (day === "Tuesday"){
//     console.log("Wednesday");
// } else if (day === "Wednesday"){
//     console.log("Thursday");
// } else if (day === "Thursday"){
//     console.log("Friday");
// } else if (day === "Friday"){
//     console.log("Saturday")
// } else if (day === "Saturday"){
//     console.log("Sunday")
// } else if (day === "Sunday"){
//     console.log("Monday")
// } else {
//     console.log("That's not a day!")
// }

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// let num1 = prompt("Enter a Number");
// let num2 = prompt("Enter another Number");

// if (num1 > num2){
//     console.log("Number 1 is less than Number 2")
// } else if (num1 < num2){}

// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }

  const firstName = prompt("Enter your first name:");
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result