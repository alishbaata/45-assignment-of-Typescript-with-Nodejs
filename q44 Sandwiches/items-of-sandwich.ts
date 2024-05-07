//creating function
function sandwichItems (...items: string[]){
    console.log("\nPreparation of Sandwich by using following items\n");
    
    items.forEach(anItem => console.log(anItem));
    
    console.log("\nEnjoy Your Sandwich Party");
}

//Calling the functions 3 times with different no of arguments
sandwichItems("Bread", "Sauces", "Chicken Spread", "Cheese", "Boil Egg");

sandwichItems("Bread", "Jam");

sandwichItems("Bread", "Sauces", "Zinger Patti", "Cheese", "Vegetables");
