//Creating an array
let userNames = ["Alishba", "Farheen", "Aliza", "Admin", "Saba"];

userNames = [];

if (userNames.length === 0){
    console.log("Your array is empty, you need to find some users");
}else{
    //Using "foreach" loop in array
userNames.forEach(aUser => {
    if (aUser === "Admin"){
        console.log(`Hello ${aUser}, would you like to see a status report? `);
   }else{
    console.log(`Hello ${aUser}, thank you for logging in again.`);
   }
})
}

//





