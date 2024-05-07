// Define Variables
let apple = "Apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
//Define Array
let fruits = ["Apple", "Banana", "Orange"];

 //Testing for equality & unequaity
 console.log("Is apple is equal to Apple?");
 console.log(apple == "Apple");
 
 console.log("\nIs apple is not equal to Apple?");
 console.log(apple != "Apple");

 //Test using lower case function
 console.log("\nIs APPLE is equal to apple after converting to lowercase?");
 console.log(upperCaseApple.toLowerCase()== "apple");
 
 console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
 console.log(upperCaseApple.toLowerCase() != "apple");
 
//Numerical Testing

//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than 
console.log("\nIs ten is greater than 0?");
console.log(10 > 0);

//Less than 
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

//Greater than & equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(20 <= 10);

//Test using "and" & "or" operator

//using "AND" operator
console.log("\nTwenty is not equal to 10 AND twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equal to 10 AND twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);

//Using "OR" operator
console.log("\n20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 OR 20 isnot  equal to 20?");
console.log(20 > 50 || 20 != 20);

//Testing weather an item is included in array
console.log("\nIs Orange is included in my fruits array?");
console.log(fruits.includes("Orange"));

//Not Include
console.log("\nIs Orange is not included in my fruits array?");
console.log(fruits.includes("Orange"));
