//Create a stopwatch object that has four properties and three methods
let stopwatch = {} // literal notation is used to create this object

stopwatch.currentTime = 12
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.brand = 'zeo'

stopwatch.tellTime = function(time){
    console.log(`The Current time is ${time}`)
}
stopwatch.stopBrand = function(brands){
    console.log(`The best brand is ${brands}`)
}
stopwatch.whatshape = function(shape){
    console.log(`The best shape is ${shape}`)
}

stopwatch.tellTime(stopwatch.currentTime)
stopwatch.stopBrand(stopwatch.brand)
stopwatch.whatshape(stopwatch.shape)