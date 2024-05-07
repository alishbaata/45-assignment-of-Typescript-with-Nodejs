//Creating an array
var petAnimals = ["Cat", "Dog", "Rabbit"];
//Using for-loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var anAnimal = petAnimals_1[_i];
    console.log("A ".concat(anAnimal, ", would make a great pet."));
}
//Print a message outside the for-loop
console.log("Any of these animals would make a great pet!");
