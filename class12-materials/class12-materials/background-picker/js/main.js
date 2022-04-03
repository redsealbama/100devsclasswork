// First we have to have to use document.getElementById to return an Element object by the ID property in our HTML. 
// In this case we have 4 of them. When the element is selected with a click, the function runs.

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed

// The functions below whenever the ID classes of purple, green, blue, or red are selected, will run these functions.
// First we select the body element with .queryselector and then change the style of the background to the color desired.
// Next we change the text of the page to white. 


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,0,0)'
  document.querySelector('body').style.color = 'white'
}
