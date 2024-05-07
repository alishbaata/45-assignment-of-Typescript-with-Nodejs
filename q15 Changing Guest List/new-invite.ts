let guestsName = ["Hamza", "Saif", "Alishba"];

let notjoining = guestsName[2];

console.log(notjoining, "Not joining us for the dinner due to some unconditional circumstances");

guestsName.splice(2 , 2, "Khan");

guestsName.forEach(aGuest =>console.log(`Hello buddy ${aGuest}, would you like to join me on diiner?`));
