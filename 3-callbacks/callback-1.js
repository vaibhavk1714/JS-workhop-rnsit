// Example 1 - syntax

function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

// Callback function
function farewell() {
    console.log('Goodbye!');
}

// Using the callback function
greet('John', farewell);