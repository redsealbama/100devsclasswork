// When you click final rose, only nikki remains

// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }


// When you click final rose, only nikki remains
// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }

// Lets break this down
// first we add a querySelector grabbing the finalRose ID and adding a event listener when someone clicks Final Rose
// then the hide function will run

// for our hide function, we will to obtain the elements with IDs of claire and sharleen and set their display 
// to none

document.querySelector('#finalRose').addEventListener('click', hide)

function hide (){
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#sharleen').style.display = 'none';
}