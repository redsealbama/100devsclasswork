//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }
// If I want it to go into the console log
document.querySelector('#check').addEventListener('click', check)

function check(){

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("You have class")
  } else if(day === "wednesday"){
    console.log("Hump Day!")
  } else if(day === "saturday" || day === "sunday" ){
    console.log("Yay! It's the weekend")
  } else(
    console.log("Boring Day")
  )
}

// document.querySelector('#check').addEventListener('click', check);

// function check() {

//   const day = document.querySelector('#day').value

//   //Conditionals go here
//   if (day === "Saturday" || day === "Sunday") {
//     document.querySelector('#placeToSee').innerText = ("Hooray! It's the weekend")
//   } else if (day === "Tuesday" || day === "Thursday") {
//     document.querySelector('#placeToSee').innerText = ("Class Day!")
//   } else {
//     document.querySelector('#placeToSee').innerText = ("This is a boring day.")
//   }

// }
// let placeToSee = document.querySelector('#day').value 


//now i want the result to go to my h2 ID = placeToSee 
// First I want to add an eventlistener on my button with ID of check when a user clicks, the function check runs

// document.querySelector('#check').addEventListener('click', check)

// // Next I will create a function named check, declare a variable that takes the value from the users input in #day
// // After this I will add my conditionals where if the days are a certain value, it will display within the DOM 
// // that it is a certain day. Remember innerText
// function check (){

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector('#placeToSee').innerText = ("Class Day!")
//   } else if (day === "wednesday"){
//     document.querySelector('#placeToSee').innerText = ("It's Hump Day!")
//   } else if (day === "saturday" || day === "sunday"){
//     document.querySelector('#placeToSee').innerText = ("It's the weekend!")
//   }
// }
// let placeToSee = document.querySelector('#day').value

//now i want the result to go to my h2 ID = placeToSee 
// First I want to add an eventlistener on my button with ID of check when a user clicks, the function check runs
document.querySelector('#check').addEventListener('click', check)

// Next I will create a function named check, declare a variable that takes the value from the users input in #day
// After this I will add my conditionals where if the days are a certain value, it will display within the DOM 
// that it is a certain day. Remember innerText

function check(){

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerHTML = ('Class Day!')
  } else if(day === 'wednesday'){
    document.querySelector('#placeToSee').innerHTML = ('Hump Day!')
  } else if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerHTML = ('Weekend!')
  }
}
let placeToSee = document.querySelector('#day').value