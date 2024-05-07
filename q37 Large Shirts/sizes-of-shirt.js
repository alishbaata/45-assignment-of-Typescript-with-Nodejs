//Making a Function
function myShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("My shirt size is ".concat(size, " with having a print message of ").concat(printMessage, "."));
}
//Calling a Function with by default values
myShirt();
//Calling a function with changing in size but the message remains same
myShirt("Medium");
//Calling a function with changing in size and in message 
myShirt("Small", "Pakistan is an Islamic Country.");
