//creating a function
function carParts(manufacture , model , ...options){
    // initialize a car object with maufacture & models
    let car = {
        manufacturer: manufacture,
        model: model
    };

    //Adding additional objects in the car
    options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

//Calling a funtion to carParts obect
let myCar = carParts("Toyota", "Corolla", "color : Black", "SunRoof : True","Year: 2024");

//Print the variable of myCar
console.log(myCar);

