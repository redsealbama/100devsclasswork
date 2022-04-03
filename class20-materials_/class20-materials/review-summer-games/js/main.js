//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
//mine
/*
function multiplyArray(arr){
    let arr = [1,2,3,4,5]
    arr.forEach( (x,i) => alert(x * x))
}
*/

//Leons
function multiNumsInArr(arr){ //arr is our parameter
    let product = 1 // like to have our product defined. our product that we are multiplying into
    // arr.forEach( num => product *= num )
    for(let i = 0; i < arr.length; i++){
        product *= arr[i]
    }
    alert(product)
}
multiNumsInArr([10,2,3]) //10,2,3 is our array that is used for our function
