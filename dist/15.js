"use strict";
var Math1;
(function (Math1) {
    function add(a, b) {
        return a + b;
    }
    Math1.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Math1.subtract = subtract;
})(Math1 || (Math1 = {}));
console.log(Math1.add(5, 3));
console.log(Math1.subtract(5, 3));
