//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function snacking(){
    document.querySelector('input').value
    for (i = 1; i < input; i++){
        alert('stop!')
    }
}
// First add an event listener first
document.querySelector('#help').addEventListener('click', stopSnacking)
// Next we setup our function. We want to get the value of the input and make sure it is a number.
// We want to use a loop to do something over and over again. 
// We want this to loop to continue as long as i is less than numOfSnacks
// We want to tell the user to stop every time this is run.
// += allows it to be shown more than once
// the first querySelector allows us to make it empty each time this function runs. Avoids duplication of "STOP"
function stopSnacking(){
    let numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for(let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += ' STOP!' // the space is there so they don't run together. 
    }
}