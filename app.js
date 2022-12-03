const firstName = document.querySelector(".f-name");
const lastName = document.querySelector(".l-name");
const emaliInput = document.querySelector(".em-input");
const password = document.querySelector(".pass");
const sendBtn = document.querySelector(".free-trial");
const errorIcon = document.querySelector(".error-icon");
const firstNameError = document.querySelector(".fname-message");
const lastNameError = document.querySelector(".lname-message");
const emailErrorMessage = document.querySelector(".emerror-message");
const passwordEmailMessage = document.querySelector(".pass-error-message");
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value < 1) {
    firstName.style.border = ".1rem solid red";
    errorIcon.style.display = "block";
    firstNameError.innerHTML = "First Name cannot be empty";
  }
  if (lastName.value < 1) {
    lastName.style.border = ".1rem solid red";
    errorIcon.style.display = "block";
    lastNameError.innerHTML = "Last Name cannot be empty";
  }
  if (emaliInput.value < 1) {
    emaliInput.style.border = ".1rem solid red";
    errorIcon.style.display = "block";
    emailErrorMessage.innerHTML = "Email cannot be empty";
  } else {
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(emaliInput.value.toLowerCase()) === false) {
      emaliInput.style.border = ".1rem solid red";
      errorIcon.style.display = "block";
      emailErrorMessage.innerHTML = "Type a valid email";
    }
  }
  if (password.value < 1) {
    password.style.border = ".1rem solid red";
    errorIcon.style.display = "block";
    passwordEmailMessage.innerHTML = "Password cannot be empty";
  }
});
sendBtn.addEventListener("click", (e) => {
  firstName.value = "";
  lastName.value = "";
  emaliInput.value = "";
  password.value = "";
});
