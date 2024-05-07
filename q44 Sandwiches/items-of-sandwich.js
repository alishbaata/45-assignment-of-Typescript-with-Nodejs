//creating function
function sandwichItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nPreparation of Sandwich by using following items\n");
    items.forEach(function (anItem) { return console.log(anItem); });
    console.log("\nEnjoy Your Sandwich Party");
}
//Calling the functions 3 times with different no of arguments
sandwichItems("Bread", "Sauces", "Chicken Spread", "Cheese", "Boil Egg");
sandwichItems("Bread", "Jam");
sandwichItems("Bread", "Sauces", "Zinger Patti", "Cheese", "Vegetables");
