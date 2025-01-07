// funny case makes each letter in the string the oppsite case as the one before
var funnyCase = string =>{
    var newString = "";
    for(var i = 0; i<string.length; i ++){
   if(i %2 === 0) newString += string[i].toLowerCase();
      else newString += string[i].toUpperCase();
    }
    return newString;
};

// Prints:  `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));
