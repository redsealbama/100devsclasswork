//Write your pseduo code first! 
// I want to get a value in C and convert it to F and display it on the DOM

// First I am going to request the user to input a numerical value into a form 
// I am going to add an event listener that will run a function to convert C into F.
// Then I want it to display this conversion in the DOM.

//0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //need the value that is in celcius
    let temp = document.querySelector('#sel').value
    //convert from celsius to farenheit
    temp = temp * 9/5 + 32;
    //show it
    document.querySelector('#placeToYell').innerText = temp



}


