"use strict";
const formData = {
    username: "user123",
    email: "user@gmail.com",
    // password hali kiritilmagan
};
function validateForm(form) {
    return !!(form.username && form.password && form.email);
}
console.log("Forma to'liqmi?", validateForm(formData));
// tsc && node ./dist/13.js
