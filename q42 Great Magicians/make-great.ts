//Creating an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Functions to make magicians great through.map() it will modify array
function makeGreat (magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Defining an array of magicians names
let magiciansNames = ["Pooja", "Paaji", "Hiba"];

//Calling makeGreat function to modify magicians names 
let greatMagicians = makeGreat(magiciansNames);

console.log(greatMagicians);

//Calling show_magicians that show modified list of magicians
show_magicians(greatMagicians);