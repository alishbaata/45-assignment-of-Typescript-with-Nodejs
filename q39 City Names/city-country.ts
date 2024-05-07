//Creating the function with parameters which return the value in string
function city_country (city: string, country: string) : string{
    return `${city}, ${country}`;
}

//Calling a function & printing the value of return 
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Jeddah", "Saudi Arab"));