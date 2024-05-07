//creating a function
function carParts(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with maufacture & models
    var car = {
        manufacturer: manufacture,
        model: model
    };
    //Adding additional objects in the car
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Calling a funtion to carParts obect
var myCar = carParts("Toyota", "Corolla", "color : Black", "SunRoof : True", "Year: 2024");
//Print the variable of myCar
console.log(myCar);
