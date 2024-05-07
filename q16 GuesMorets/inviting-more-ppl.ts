// creating arrays of guestlist
let guestsName = ["Hamza", "Saif", "Alishba", "Saba"];

// adding and removing the variable's value 
let notjoining = guestsName[0];

// printing the name of the guest who is not joining us
console.log(notjoining, "Not joining us for the dinner due to some unconditional circumstances");

// aading and removing the guest fron the guestsName
guestsName.splice(0 ,1 , "Khan");

//printing the message for arranging the bigger table
console.log("Good News!! We have found a bigger table for the dinner");

//adding a new guest at the starting index of the array
guestsName.unshift("Ata");

//adding a new guest at the ending index of the array
guestsName.push("Farheen");

//adding the middle index to the guestsName array
let middleindex: number = Math.floor(guestsName.length / 2);

//adding the new guest at the middle index of the array
guestsName.splice(middleindex, 0, "Ejja");

//print message of updated list
console.log("Updated List of our guests");

//sending invitation to all of our guests on the table on by one
guestsName.forEach(singlePerson => console.log(`Hey ${singlePerson}, I am waiting for you on the dinner table`));