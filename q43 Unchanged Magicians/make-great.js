//Creating an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Functions to make magicians great through.map() it will modify array
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Defining an array of magicians names
var magiciansNames = ["Pooja", "Paaji", "Hiba"];
//Making a copy of original array through .slice() function
var copy_magiciansNames = magiciansNames.slice();
//Modify the copied array to include "The great" with their names
var copy_greatMagicians = makeGreat(copy_magiciansNames);
//Show both arrays original & copied 
//Original
console.log("Original Array\n");
show_magicians(magiciansNames);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_greatMagicians);
