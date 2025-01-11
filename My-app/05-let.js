// 1. When writing conditions, values, defined inside the conditional block exist outside of it

if(true){
 var favouriteColor = "red";
}

console.log(favouriteColor);  // prints `red`

// 2. When using let, values defined inside of conditional block. Don't exsit outside
let favouriteFood;
if(true){
favouriteFood = "pizza";
}

// This works since favourite color is not defined inside of block
console.log(favouriteFood);
// prints pizza.

//
// We are using `let and const` rather than `var` 👍

// 3. const can be used for values which we will not reassign
// const age = 25;
// age++; //TypeError: Assignment to constant variable

// 
// const myName = "";
// myName = "Bilkis"; //TypeError: Assignment to constant variable.
// 

// 4. const doesn't mean `const variable` . instant means `constant reference`
// Unlike primitive data types, objects and arrays are passed by reference, rather than value
const beatles = ["John", "Paul", "Ringo"];
beatles.push("George");
// This works because by updating an array's contents, we are changing the reference to the underlying array
console.log(beatles);  //prints ["John", "Paul", "Ringo", "George"];

//  5. When using var; our counter exists after a for-loop is done; 
// for(var i = 0; i< 5; i++){
// console.log(i);  //Prints 5
// }
// console.log(i);

// When using let, our counter is not defined outside of the `for loop` block
// let j = 5;
// let x = 42;
// for(let j = 0; j < 5; j++){
// console.log(j);
// console.log(x);
// }
// `j` is not declared on the top, like `x` .
// That's why it is undefined.
// console.log(j);
// console.log(x);

// 6.When using while loops, any values we are creating inside, it's exist outside of the `while-loop` block
var count = 0;
while(count<5){
var tripled = count*3;
count++
}
console.log(tripled); //Prints 12;