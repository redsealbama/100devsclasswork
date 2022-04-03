// First we have to have to use document.getElementById to return an Element object by the ID property into our JS. 
// In this case we have 4 of them. When the element is selected with a click, the function runs.Function names can be anything.
document.getElementById('purple').onclick = makePurple;
document.getElementById('#green').onclick = makeGreen;
document.getElementById('#blue').onclick = makeBlue;
document.getElementById('#red').onclick = makeRed;

// The functions below whenever the ID classes of purple, green, blue, or red are selected, will run these functions.
// First we select the body element with .queryselector and then change the style of the background to the color desired.
// Next we change the text of the page to white. 
// rgb purple (128,0,128), rgb green (0,128,0), rgb blue (0,0,255), rgb red (255,0,0), rgb white (255,255,255)
function makePurple(){
  document.querySelector('body').style.backgroundColor = 'rgb(128,0,128)';
  document.querySelector('body').style.color = 'rgb(255,255,255)';
}

function makeGreen(){
  document.querySelector('body').style.backgroundColor = 'rgb(0,128,0';
  document.querySelector('body').style.color = 'rgb(255,255,255)';
}

function makeBlue(){
  document.querySelector('body').style.backgroundColor = 'rgb(0,0,255)';
  document.querySelector('body').style.color = 'rgb(255,255,255)'
}

function makeRed(){
  document.querySelector('body').style.backgroundColor = 'rgb(255,0,0)';
  document.querySelector('body').style.color = 'rgb(255,255,255)';
}


