// set up an event listenser so when I click a name, it either hides the image or makes the image appear.
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden') // we add the hidden class so claire and sharleen are hidden
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden') // here we toggle hidden so andi has appeared
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	andi.classList.add('hidden') // classList tells us that it is a class already, so we do not need the . to tell JS that it is a class.
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}
