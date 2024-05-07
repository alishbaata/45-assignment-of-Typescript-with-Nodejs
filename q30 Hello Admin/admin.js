//Creating an array
var userNames = ["Alishba", "Farheen", "Aliza", "Admin", "Saba"];
//Using "forEach" Loop in array
userNames.forEach(function (aUser) {
    if (aUser === "Admin") {
        console.log("Hello ".concat(aUser, ", would you like to see a status report? "));
    }
    else {
        console.log("Hello ".concat(aUser, ", thank you for logging in again."));
    }
});
