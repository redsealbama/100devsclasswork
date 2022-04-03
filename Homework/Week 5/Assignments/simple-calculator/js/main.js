// first we have a global variable with a value of 0
let total = 0;
// Go into the DOM and find the IDs of pumkin, dominosPizza, zebra, and cantThinkOfAnything and place a smurf(event listener) on them. 
// When the event of 'click' happens then make the custom named functions run.
document.querySelector('#pumpkin').addEventListener('click', makeZero);
document.querySelector('#dominosPizza').addEventListener('click', addThree);
document.querySelector('#zebra').addEventListener('click', addNine);
document.querySelector('#cantThinkOfAnything').addEventListener('click', minusTwo);

// the first function I want the the total to be reset to 0. 
// remember you declare the total first, then put the total in #placeToPutResult
function makeZero(){
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}
// the next function I want the total to go up by 3 every time the user clicks on 3 on the webpage.
// remember to redeclare the total and add +3 every time. 
function addThree(){
  total = total + 3;
  document.querySelector('#placeToPutResult').innerText = total;
}
// the next function I want the total to go up by 9 every time the user clicks on 9 on the webpage
// remember to redeclare the total and add +9 every time.
function addNine(){
  total = total + 9;
  document.querySelector('#placeToPutResult').innerText = total;
}
// the next function I want the total to go DOWN by 2 every time the user clicks on -2 on the webpage.
// remember to redeclare the toal and subtract by 2 every time.
function minusTwo(){
  total = total - 2;
  document.querySelector('#placeToPutResult').innerText = total;
}
