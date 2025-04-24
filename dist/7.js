"use strict";
function unknownValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value * 2);
    }
    else {
        console.log("Noma'lum tur");
    }
}
unknownValue("Nimadir nomalumga topolmadim");
// tsc && node ./dist/7.js
