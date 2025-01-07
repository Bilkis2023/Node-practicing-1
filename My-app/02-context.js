// Depending on the environment `setTimeout ` is called in, it may be refer to one of tow objects
// In the browser `setTimeout` is property of `window` object
// In node, it belongs to a special "Timeout" object

var person = {
    name: "Hodor",
    saySomething: function(){
        console.log(this.name + "is thinking...");
        setTimeout(function(){
            console.log(this.name + "!");
        }, 1000);
    }
};

// person.saySomething();  //prints "Hodor is thinking...
// prints "undefined!" 100ms later

// Arrow function bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
    name: "Hodor",
    saySomething: function(){
        console.log(this.name + "is thinking...");
        setTimeout(()=> console.log(this.name + "!"), 1000); 
    }
};

//prints "Hodor is thinking...
// prints `Hodor` 100ms later


person.saySomething();