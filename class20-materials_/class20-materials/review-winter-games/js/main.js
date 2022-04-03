//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
/* Mine
function multiNumbers(arr){
    let arr = arr2.map(x => 2)
    return (arr2)
}
*/
function onlyEvens(nums){
    let evens = []

    nums.forEach( n => {
        if(n % 2 === 0){
            evens.push(n)
        }
    } )
    return evens 
}
console.log(onlyEvens( [1,2,3,4,5] ))
