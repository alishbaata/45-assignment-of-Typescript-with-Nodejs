//Creating an array
let numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Using for-loop
for(let aNumber of numbers){
    let ordinalEnding: string;

    if(aNumber === 1){
        ordinalEnding = "st";
    }
    else if (aNumber === 2){
        ordinalEnding = "nd";
    }
    else if (aNumber === 3){
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${aNumber}${ordinalEnding}`);
}

