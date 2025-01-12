const moviePatrons = [
    {name: "Jolle", age:20},
    {name: "Molle", age:18},
    {name: "Tolle", age:15},
    {name: "Polle", age:27},
    {name: "Nila", age:13},
    {name: "Tina", age:11},
    {name: "Tomi", age:29},
];

// 1. 
// Using `forEach` a functional way of iterating through an array without a for-loop.
// It is mutating the array, not creating a new array.

// moviePatrons.forEach(patrons => console.log(patrons.age));

// 2. 
// filter returns a new array containing only elements whose callback returns a truthy value
// Creating a brand new array

const canWatchRatedR = moviePatrons.filter( (patrons)=> patrons.age> 17 );
console.log(canWatchRatedR);


// 3. Map returns a brand new array the same length as the first. Each element is passed into the callback .
// Whatever is returned from the callback at each iteration is what goes into that index of the new array. 
const cardedMoviePatrons = moviePatrons.map(patron=> {
// Copy the object being iterated over
const pObj = {...patron};
// Do everythin else same
if(pObj.age >= 17){
pObj.canWatchRatedR = true;
}else{
    pObj.canWatchRatedR = false;
}
// Be sure to return the new object, not the parameter
return pObj;

});
console.log("Movie Patrons:")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);