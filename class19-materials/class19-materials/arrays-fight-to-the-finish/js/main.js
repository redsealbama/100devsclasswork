//Create an array of movie titles. Loop through the array and add each element to the h2.
let movieTitles = ['lotr1','lotr2','lotr3']
for(let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
// Just reassigning the spaces in the array
let arrayNumbers = [10,20,30]

arrayNumbers.forEach((item, idx) => {
    arrayNumbers[i] = item + 3
}) 


//Find the average of all the numbers from question two
let sum = 0
// now we add each number to sum
arrayNumbers.forEach((num) => sum+=arrayNumbers)
//or
for(let i = 0; i < arrayNumbers.length; i++){
    sum = sum + arrayNumbers[i]
}
console.log( sum / arrayNumbers.length);