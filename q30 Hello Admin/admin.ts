//Creating an array
let userNames = ["Alishba", "Farheen", "Aliza", "Admin", "Saba"];

//Using "forEach" Loop in array
userNames.forEach(aUser => {
    if (aUser === "Admin"){
        console.log(`Hello ${aUser}, would you like to see a status report? `);
   }else{
    console.log(`Hello ${aUser}, thank you for logging in again.`);
   }
})