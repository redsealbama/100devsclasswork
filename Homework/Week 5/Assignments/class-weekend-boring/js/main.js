// First we have to have a event listener for our function 
document.querySelector('#check').addEventListener('click', check);

// Here your function needs to be declared before your nested variable
function check(){
    const day = document.querySelector('#day').value

    if (day === 'Saturday' || day === 'Sunday'){
        document.querySelector('#placeToSee').innerText = ('Weekend');
    } else if (day === 'Tuesday' || day === 'Thursday'){
        document.querySelector('#placeToSee').innerText = ('Class Day');
    } else{
        document.querySelector('#placeToSee').innerText = ('Boring Day');
    }
}
// We need a variable that will hold the value of day that the user puts in. It gives us the value of the ID day.
// variable day is obtained from the value of the users input into day

    // If the day is Sat or Sun, it is the weekend.
    // If the day is Tues or Thur, it is class day.
    // If its any other day, it is a boring day.
