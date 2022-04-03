// Object Literal
// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     }
// }; // these curly braces are object literal

//this object has three members. Properties and methods
// methods are functions within an object

// circle.draw();


// Factory Function
// if an object has one or more methods, it has behavior
function createCircle(radius) {
    return {
        radius: radius, // if key and value are the same, you can remove : radius if you like.
        draw: function() {
            console.log('draw')
        }
    }
}
const circle = createCircle(1); // circle is an object


// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1); // another is an object.


// Start and Stopwatch
// First we create an object with a few different methods

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function(){ //start method
        if (running) // if the start method is running
        throw new Error('Stopwatch has already started');  //give us an error that the stopwatch has already started
        running = true; // otherwise if the stopwatch is not running. we set running = true/
        startTime = new Date(); // we then give startTime a new date indicating that the startTime is logged.
    };
    this.end = function(){ //end method
        if(!running) // if the end method is running
        throw new Error('Stopwatch has already ended');
        running = false;
        endTime = new Date(); // the reverse applies too end.
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; 
        duration += seconds;
    };
    this.reset = function(){ //reset method
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    };
    Object.defineProperty(this, 'duration', { //read-only property is 'duration
        get: function() { return duration; } // this getter simply returns the duration which is a local variable in the function StopWatch
    });
}


