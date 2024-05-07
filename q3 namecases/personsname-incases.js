var personsName = "alishba Khan";
console.log(personsName.toLocaleLowerCase());
console.log(personsName.toLocaleUpperCase());
console.log(personsName.replace(/\b\w/g, function (abcd) { return abcd.toLocaleUpperCase(); }));
