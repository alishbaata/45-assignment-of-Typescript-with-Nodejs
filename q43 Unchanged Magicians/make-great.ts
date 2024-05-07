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

//Making a copy of original array through .slice() function
let copy_magiciansNames = magiciansNames.slice();

//Modify the copied array to include "The great" with their names
let copy_greatMagicians = makeGreat(copy_magiciansNames);

//Show both arrays original & copied 

//Original
console.log("Original Array\n");
show_magicians (magiciansNames);

//Copied
console.log("\nCopied Array\n");
show_magicians(copy_greatMagicians);



