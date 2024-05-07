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
//Calling makeGreat function to modify magicians names 
var greatMagicians = makeGreat(magiciansNames);
console.log(greatMagicians);
//Calling show_magicians that show modified list of magicians
show_magicians(greatMagicians);
