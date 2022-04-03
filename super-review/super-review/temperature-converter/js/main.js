//Write your pseduo code first! 

//First we need to get the regular temperature in C.

//Next we need to do math. Which is C = 5/9 x (F - 32)

// We first need to take the value of C and then do maths to it.

// Lastly we show the value to the user


// Leons example
document.querySelector('h1').addEventListener('click', convert) 

function convert(){
    let enteredVal = Number(document.querySelector('input').value) // gets the value from this input. Remember to be specific and use Number()
    let temp = enteredVal * 1.8 + 32
    document.querySelector('h2').innerText = temp
}

