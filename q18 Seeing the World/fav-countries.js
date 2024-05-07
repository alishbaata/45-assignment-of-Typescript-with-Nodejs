var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries & printing it in its original order
var countriesToVisit = ["Saudia Arab", "Canada", "Turkey", "Dubai"];
console.log("Original Order:", countriesToVisit);
//Printing an array in Alphabatical Order without modifying the actual array list
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
//checking that the array is still in its original order
console.log("Still in original order:", countriesToVisit);
//Printing an array in Reverse Order without modifying the original array
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//checking that the array is still in its original order
console.log("Still in original order:", countriesToVisit);
//changing the original array`s order
console.log("Reversing Original array:", countriesToVisit.reverse());
//Printing the array to show that its back to its original order
console.log("Back to original Order:", countriesToVisit.reverse());
//Printing the array to show that its order has been changed in alphabatical order 
console.log("Sorted in Alphabatical order:", countriesToVisit.sort());
//Again changed the original order & Reversed it
console.log("Reversing Original array Again:", countriesToVisit.reverse());
