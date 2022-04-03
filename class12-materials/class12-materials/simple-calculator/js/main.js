let total = 0
// Go into the DOM and find the ID of pumkin, and place a smurf(event listener). When the event of 'click' happens, then makeZero function runs.
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// This function first reassigns our variable of total and reassigns a value of 0. 
// Then it will go back into the DOM, look for something that has the #placeToPutResult and put text inside of it. The text inside is the total.
function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
