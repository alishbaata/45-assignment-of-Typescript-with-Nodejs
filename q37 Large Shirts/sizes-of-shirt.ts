//Making a Function
function myShirt(size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`My shirt size is ${size} with having a print message of ${printMessage}.`); 
}


 //Calling a Function with by default values
myShirt();


//Calling a function with changing in size but the message remains same
myShirt("Medium");

//Calling a function with changing in size and in message 
myShirt("Small", "Pakistan is an Islamic Country.")

