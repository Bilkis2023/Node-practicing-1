// Avoid using arrow function for object methods
var dog = {
    name: "Lassie",
    sound: "Woof!",
    makeSound:()=>console.log(this.sound),
    readTag:()=>console.log("The dog's tag reads:" + this.name + ".")
};

// prints `undefined`
dog.makeSound();

// Prints `the dog's tag reads: undefined.`
dog.readTag();

// in the makeSound and readTag methods, `this` doesn't refer to `dog`
// if this code run in node, `this` refers to the `module.exports` (the object containing all the exports in this file)
// if this code run in the browser, `this` would refer to the window