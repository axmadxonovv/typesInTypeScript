interface RegistrationForm {
  username: string;
  password: string;
  email: string;
  phone?: string;
}

const formData: Partial<RegistrationForm> = {
  username: "user123",
  email: "user@gmail.com",
  // password hali kiritilmagan
};

function validateForm(form: Partial<RegistrationForm>): boolean {
  return !!(form.username && form.password && form.email);
}

console.log("Forma to'liqmi?", validateForm(formData));
// tsc && node ./dist/13.js
