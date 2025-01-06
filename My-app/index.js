// console.log(this);

// (function(){
//     console.log(this);
// }) ();

// console.log("Hellooo, Node!")

// All of the `createGreeting ` functions are equivalent:
var createGreeting = function(message, name) {
    return message + "," + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
    return message + "," + name + "!";
};

// If the arrow function contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + "," + name + "!";

// If an arrow function has only one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions as we call regular functions
var greeting = createGreeting("Hello", "Bilkis");

// Logs "Hello, Bilkis!";
greet(greeting);