document.querySelector('#check').addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === "Saturday" || day === "Sunday") {
    document.querySelector('#placeToSee').innerText = ("Hooray! It's the weekend")
  } else if (day === "Tuesday" || day === "Thursday") {
    document.querySelector('#placeToSee').innerText = ("Class Day!")
  } else {
    document.querySelector('#placeToSee').innerText = ("This is a boring day.")
  }

}
let placeToSee = document.querySelector('#day').value 

