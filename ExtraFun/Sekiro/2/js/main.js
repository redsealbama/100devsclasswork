// Declaration of the boss variables and assign them a value
const lady = document.querySelector('#lady');
const oniwa = document.querySelector('#oniwa');
const ashina = document.querySelector('#ashina');
const monkey = document.querySelector('#monkey');
const guardian = document.querySelector('#guardian');
const monk = document.querySelector('#monk')
const isshen = document.querySelector('#isshin')
const dragon = document.querySelector('#dragon')
const owl = document.querySelector('#owl')
const orin = document.querySelector('#orin')
const demon = document.querySelector('#demon')
const saint = document.querySelector('#saint')

// Set of instructions (our functions) go into an event listener. When the user clicks the text with the IDs, it will
//  run the set of instructions (function)

document.querySelector('#ladyNext').addEventListener('click', ladyInfo)
document.querySelector('#oniwaNext').addEventListener('click', oniwaInfo)
document.querySelector('#ashinaNext').addEventListener('click', ashinaInfo)
document.querySelector('#monkeyNext').addEventListener('click', monkeyInfo)
document.querySelector('#guardianNext').addEventListener('click', guardianInfo)
document.querySelector('#monkNext').addEventListener('click', monkInfo)
document.querySelector('#isshinNext').addEventListener('click', isshinInfo)
document.querySelector('#dragonNext').addEventListener('click', dragonInfo)
document.querySelector('#owlNext').addEventListener('click', owlInfo)
document.querySelector('#orinNext').addEventListener('click', orinInfo)
document.querySelector('#demonNext').addEventListener('click', demonInfo)
document.querySelector('#saintNext').addEventListener('click', saintInfo)


// our set of instructions. classList gives you the class. toggle actually adds/removes the class from the element.
function ladyInfo(){
	oniwa.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	lady.classList.toggle('hidden')
}

function oniwaInfo(){
	ashina.classList.add('hidden')
	lady.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	oniwa.classList.toggle('hidden')
}

function ashinaInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	ashina.classList.toggle('hidden')
}

function monkeyInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	guardian.classList.add('hidden')
	monkey.classList.toggle('hidden')
}

function guardianInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.toggle('hidden')
}

function monkInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.toggle('hidden')
}

function isshinInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.toggle('hidden')
}

function dragonInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.add('hidden')
	dragon.classList.toggle('hidden')
}

function owlInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.add('hidden')
	dragon.classList.add('hidden')
	owl.classList.toggle('hidden')
}

function orinInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.add('hidden')
	dragon.classList.add('hidden')
	owl.classList.add('hidden')
	orin.classList.toggle('hidden')
}

function demonInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.add('hidden')
	dragon.classList.add('hidden')
	owl.classList.add('hidden')
	orin.classList.add('hidden')
	demon.classList.toggle('hidden')
}

function saintInfo(){
	oniwa.classList.add('hidden')
	lady.classList.add('hidden')
	ashina.classList.add('hidden')
	monkey.classList.add('hidden')
	guardian.classList.add('hidden')
	monk.classList.add('hidden')
	isshin.classList.add('hidden')
	dragon.classList.add('hidden')
	owl.classList.add('hidden')
	orin.classList.add('hidden')
	demon.classList.add('hidden')
	saint.classList.toggle('hidden')
}