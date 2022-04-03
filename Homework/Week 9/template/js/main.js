// Array-Methods Summary Work

// First one was impossible and not covered in the text

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values 
// higher or equal to a and lower or equal to b and return a result as an array.

// function filterRange(arr, a, b){
//     return arr.filter(item => (a <= item && item <= b));
// }
// let arr = [5, 3, 8, 1]; // this is our array nested inside of our function
// let filtered = filterRange(arr, 1, 4); // this puts values in our function above


//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes 
// from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// function filterRangeInPlace(arr, a, b){
//     return arr.filter(a < arr[i] < b)
// }
// This is so dumb this is nothing like what we read

//Sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a,b) {return a - b; });
// alert(arr);

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

// let arr = [1,2,3,4,5]
// let sorted = copySorted(arr);

// alert(sorted);

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

//Improve our example RPG program to add an experience property named xp to the character. 
//Its initial value is 0. Experience must appear in character description.


//github jsway chapter6 OBJECTS HW
// TODO: create the character object here
// const aurora = {
//     name:"aurora",
//     health:150,
//     strength:25,
//     xp:0,
//     describe(){
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
//     }
// };
// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

//Complete the following program to add the dog object definition
// TODO: create the dog object here
// const dog = {
//     name:"shelby",
//     species:"doodle",
//     size:80,
//     bark(){
//         return `${this.name} which is a ${this.species} and is significatly larger than a cat being ${this.size} ibs. Woof Woof`
//     }
// };


// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Complete the following program to add the circle object definition. Its radius value is input by the user.
// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here
// const circle = {
//     radius: r, //here we put the value of r as the value of radius
//     circumference(){ // we now have to get the circumference based on radius value. 
//         return 2 * this.radius * Math.PI; // We must return the circumference of the circle
//     },
//     area() {
//         return this.radius ** 2 * Math.PI; // return the area of the circle
//     }
// };

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

/* Write a program that creates an account object with the following characteristics:
A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/
// My code
// const account = {
//     name:"Alex",
//     balance:0,
//     credit(){
//         return this.balance +- this.balance //I think this will return this value to the balance
//     },
//     describe(){
//         console.log(`owner: ${account.name}, balance ${account.balance}`)
//     }
// };
// balance.account += 250;
// balance.account -= 80;
// console.log(account.credit());
// console.log(account.describe());
// Answer
/*
Object-oriented bank account
*/

// const account = {
//     owner: "Alex",
//     balance: 0,
  
//     // Add an amount to the bank balance
//     credit(amount) {
//       this.balance += amount;
//     },
  
//     // Return account description
//     describe() {
//       return `owner: ${this.owner}, balance: ${this.balance}`;
//     }
//   };
  
//   console.log(account.describe());
//   account.credit(250);
//   account.credit(-80);
//   console.log(account.describe());

  // Very similar pieces here. We both with with the object oriented programming route. 


  //Eloquent Javascript Ch 4 Q/A
  // Write a range function that takes two arguments, start and end, and returns an array 
  // containing all the numbers from start up to (and including) end.

  // Your code here.
// function range(start,end)
//    array = [];
// function sum(array) {
//   let result = 0;

//   for (num of array) { //This is a for of function
//     result += num;
//   }

//   return result;
// }
// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

//Reversing an Array
function reverseArray(arr) {  //Write a function reverseArray and takes an array as an argument
  let reversed = [];       // Then we take an array as the argument and produce a new array that will have the same elements as reverseArray, but in reverse order
  for (let i=arr.length-1; i>=0; i--){ // for every element inside of our arr, if our element is greater than 0, we decrement(subtract) it
    reversed.push(arr[i]); //we will push the current element [i] and (add it) to our new array reversed.
  }
  return reversed; // I want to store the value of the reversed array into memory
}
console.log(reverseArray(['a','b','c'])) // now we call our function with the elements listed for our arr

