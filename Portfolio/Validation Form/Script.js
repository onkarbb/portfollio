const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

// Validate password and confirm password match
function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords don't match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Submit form and show success message
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Registration successful!");
});
