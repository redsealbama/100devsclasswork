const contestants = document.querySelectorAll('.contestant') // there is no classList here so you need the .

// enables us to put a smurf on everything that had a class of 'contestant'
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
