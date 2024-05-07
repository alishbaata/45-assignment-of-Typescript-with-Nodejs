//Creating a Function
function describe_city (City: string, country: string = "Pakistan"){
    console.log(`${City} is in ${country}. `);
}

//Calling a function with adding a city name
describe_city("Karachi");

//Changing the value of city but country remains same
describe_city("Lahore")

//Changing the value of city and also the country
describe_city("Jeddah", "Saudi Arabia");