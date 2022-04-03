
// // This is used below. Makes it easier to use in our functions. Declaration of three variables and assigned them a value.
// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// // Set of instructions (our functions) go into an event listener. When the user clicks the text with the IDs, it will
// // run the set of instructions (function)
// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// // our set of instructions. classList gives you the class. toggle actually adds/removes the class from the element.
// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	sharleen.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }


// // Declaration of three variables and assigned them a value.
// const andi = document.querySelector('#andi');
// const claire = document.querySelector('#claire');
// const sharleen = document.querySelector('#sharleen');

// // Set of instructions (our functions) go into an event listener. When the user clicks the text with the IDs, it will
// //  run the set of instructions (function)
// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// // our set of instructions. classList gives you the class. toggle actually adds/removes the class from the element.
// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	sharleen.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

// Declaration of three variables and assign them a value
const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');

// Set of instructions (our functions) go into an event listener. When the user clicks the text with the IDs, it will
//  run the set of instructions (function)

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// our set of instructions. classList gives you the class. toggle actually adds/removes the class from the element.
function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}