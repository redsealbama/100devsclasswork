let admin;
let name;
// Delcare two variables admin and name

//assign the value "John" to name
name = "John";

//copy the value from name to admin
admin = name;

//Show the value of admin using alert (must output "John").
alert ( admin );

// Create a variable with the name of our planet. How would you name such a variable?
const EARTH;
// Create a variable to sotre the name of the current visitor to a website. How would you name that variable?
const currentVisitor;

// Rewrite this to perform the same function, but without if, in a single line. 
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
*/
// Using question mark operator '?':
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
// Using OR || (the shorest variant)
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

function min(a, b) {
  return a + b;
}
let result = sum(1, 2);