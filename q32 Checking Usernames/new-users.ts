//Creating an array for current_users
let current_users = ["Alishba", "Farheen", "Aliza", "Saba" ];

//Creating an array for new_users
let new_users = ["Ata", "Hamza", "Saif", "Alishba"];

//Loop through new_users to check for userNames availibility
new_users.forEach(new_one_user => {
    //Making a condition for username that is already exists & save in our_condition variable
    let ourCondition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    
    //Printing messages using "if" & "else" statement
    if(ourCondition){
         console.log(`Sorry Username ${new_one_user} is already added.`);
    }else{
        console.log(`This Username ${new_one_user} is available.`);
    }
})


