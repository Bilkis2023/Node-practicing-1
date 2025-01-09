// When writing conditions, values, defined inside the conditional block exist outside of it

if(true){
 var favouriteColor = "red";
}

console.log(favouriteColor);  // prints `red`

// When using let, values defined inside of conditional block. Don't exsit outside
let favouriteFood;
if(true){
favouriteFood = "pizza";
}

// This works since favourite color is not defined inside of block
console.log(favouriteFood);
// prints pizza.

