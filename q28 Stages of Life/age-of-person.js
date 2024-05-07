//Definig variable
var personAge = 19;
//Creating a Program for determinig the stage of life using "if-else" chain
if (personAge < 19) {
    console.log("Your age is less than 19 , You are a Baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("Your age is at least 2 years old but less than 4,You are a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("Your age is at least 4 years old but less than 13, You are a Kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("Your age is at least 13 years old but less than 20, You are a Teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("Your age is at least 20 years old but less than 65, You are an Adults");
}
else if (personAge >= 65) {
    console.log("Your age is age 65 or older, You are an Elder");
}
