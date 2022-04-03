//Write your pseduo code first! 

// Get temp in F
document.querySelector('#temp').addEventListener('click', convert)
//Convert C to F
function convert () {
    const fheight = document.querySelector('#yell').value

}
// Display it


//only on click
document.querySelector('#yell').addEventListener('click', run)

function run() {
    //get value out of input
  const fName = document.querySelector('#firstName').value
    //conver the value
    fName = fName * 9/5 + 32
    //show the value to the user
    document.querySelector('#placeToYell').innerText = fName
}
