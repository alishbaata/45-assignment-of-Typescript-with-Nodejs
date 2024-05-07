var guestsName = ["Hamza", "Saif", "Alishba"];
var notjoining = guestsName[2];
console.log(notjoining, "Not joining us for the dinner due to some unconditional circumstances");
guestsName.splice(2, 2, "Khan");
guestsName.forEach(function (aGuest) { return console.log("Hello buddy ".concat(aGuest, ", would you like to join me on diiner?")); });
