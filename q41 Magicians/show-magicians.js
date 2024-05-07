//Creating a function 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// defining an array containing magicians name
var magiciansNames = ["Pooja", "Paaji", "Hiba"];
//calling a function to print each magicians names
show_magicians(magiciansNames);
