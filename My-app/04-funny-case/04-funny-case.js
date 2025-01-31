// funny case makes each letter in the string the oppsite case as the one before
var funnyCase = string => {                   //We do not need to use the paranthesis `(string)=>`
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

// Prints:  `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// -------------------------------------
// 2. Map let's you loop over an array and return a new array with the same length.
var map = (arr, cb) => {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, (element) => element * 2);
console.log(doubled);

console.log(numbers);
// note this is the original array, and it is unchanged:
// ----------------------------------------------

// 3. filter let's you loop over and return a new array with some elements
var filter = (arr, cb) => {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, (currentElement) => currentElement % 2 === 0);

// Prints `[2, 4, 6, 8, 10]`
console.log(evenNumbers);

// Note: the original numbers in array is unchanged
console.log(numbers);
// ------------------------------------------------------------
// 4. netflixQueue is an object for managing  your netflix queue:
// Storing data and managing data:
var netflixQueue = {
  queue: [
    "Matilda",
    "The Road to El Dordo ",
    "A Goofy Movie",
    "Air Bud",
    "Beethoven",
    "Chatran",
    "Pocke Moon",
    "Two dogs a cat",
  ],
  watchMovie: function(){
    this.queue.pop();
  },
  addMovie: function(movie){
    this.queue.unshift(movie);
  },
  printQueue: function(){
    var list = "";
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += this.queue.length - i + "." + currentMovie + "\n";
    }
    console.log(list);
  },
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("Watched a movie!\n")
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\n Adding a movie! \n");
netflixQueue.addMovie("The Lion King");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();