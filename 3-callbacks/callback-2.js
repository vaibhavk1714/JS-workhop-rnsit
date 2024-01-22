// Example 2 - Asynchronous callback using setTimeout

function delayedGreet(name, callback) {
    setTimeout(function () {// Can be changed with arrow function
        console.log('Hello, ' + name + '!');
        callback();
    }, 2000); // Delay of 2 second (2000 milliseconds)
}

// Callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Using the asynchronous callback function
delayedGreet('Jane', sayGoodbye);