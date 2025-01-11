// 1. When writing conditions, values, defined inside the conditional block exist outside of it

// if(true){
//  var favouriteColor = "red";
// }

// console.log(favouriteColor);  // prints `red`

// 2. When using let, values defined inside of conditional block. Don't exsit outside
// let favouriteFood;
// if(true){
// favouriteFood = "pizza";
// }

// This works since favourite color is not defined inside of block
// console.log(favouriteFood);
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
// const beatles = ["John", "Paul", "Ringo"];
// beatles.push("George");
// This works because by updating an array's contents, we are changing the reference to the underlying array
// console.log(beatles);  //prints ["John", "Paul", "Ringo", "George"];

// 4.b.  
// const person = { name:"Brianna", age: 11};  
// person.age++;
// person.favoriteMovie = "Matilda";
// person.name = "Anna";

// console.log(person); //prints `{ name: 'Anna', age: 12, favoriteMovie: 'Matilda' }`


// 4.c
// When we are using `const` then we can MODIFY array and objects but can not reassign them:

const item = {
    id: 25,
    title: "Underwater Basket-Weaving DVD",
    price: "$20.99"
};
item.title = "Underwater Basket-Weaving Cloths, Foods",
item.price = "$1.99";
console.log(item);

//  item = {
//     id : 12,
//     title : "Underwater Basket-Weaving Cloths, Foods",
//     price : "$140.00",
// };  //TypeErroe: Assignment to constant variable.





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
// var count = 0;
// while(count<5){
// var tripled = count*3;
// count++
// }
// console.log(tripled); //Prints 12;

// 7.When using `let`, values defined the loop but don't exist outside of the `While-loop`
// let c = 0;

// while (c<5) {
// let quadrupled = c*4;
// c++;
// }

// console.log(quadrupled);  //RefrenceError: quadrupled is not defined
