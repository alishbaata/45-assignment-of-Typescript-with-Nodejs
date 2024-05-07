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
let middleIndex: number = Math.floor(guestsName.length / 2);

//adding the new guest at the middle index of the array
guestsName.splice(middleIndex, 0, "Ejja");

//print message of updated list
console.log("Updated List of our guests");

//sending invitation to all of our guests on the table on by one
guestsName.forEach(singlePerson => console.log(`Hey ${singlePerson}, I am waiting for you on the dinner table`));
  
//inviting only two guests for dinner
console.log("Unfortunately, the table didn't arrived on time, that's why I invite only two guests to join me");

//Using while loop to removed guests from the array until only guests remain
while(guestsName.length > 2){
    let removingGuests = guestsName.pop();
    console.log(`Sorry ${removingGuests}, you are not invited on dinner table `);
}

//sending invitation to last 2 guests on the table
console.log("Invitations to the last 2 guests");

guestsName.forEach(lastTwo => console.log(`Luckily! ${guestsName}, you are still invited on the dinner table`));

//removing last 2 reamining guests from the array
guestsName.pop();
guestsName.pop();

console.log("My list is now empty", guestsName);

