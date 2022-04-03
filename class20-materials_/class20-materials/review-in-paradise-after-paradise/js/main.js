// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
//mine
/*
let num = [1,2,3,4]
function takeArray(num){
    if(num < [0]){ //first element in the array (the first index)
        alert('Hi')
    } else if(num > [num.length -1]){
        alert('Bye')
    } else if (num === [1,2,3,4]){
        alert('We close in an hour')
    }
}
*/
//leons example

function checkFirstAndLast(arr){
    if( arr[0] < arr[arr.length -1] ){
        alert('Hi')
    } else if( arr[0] > arr[arr.length -1] ){
        alert('Bye')
    }else{
        alert('We close in an hour')
    }
}

/*another example
let nums = [10,20,30,40,50]
nums[0];
nums [nums.length -1] //50 this gives us our last element in the array
*/