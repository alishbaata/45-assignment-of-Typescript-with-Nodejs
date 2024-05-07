//Creating an array for current_users
var current_users = ["Alishba", "Farheen", "Aliza", "Saba"];
//Creating an array for new_users
var new_users = ["Ata", "Hamza", "Saif", "Alishba"];
//Loop through new_users to check for userNames availibility
new_users.forEach(function (new_one_user) {
    //Making a condition for username that is already exists & save in our_condition variable
    var ourCondition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    //Printing messages using "if" & "else" statement
    if (ourCondition) {
        console.log("Sorry Username ".concat(new_one_user, " is already added."));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available."));
    }
});
