const form = document.getElementById("formId");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const date = document.getElementById("date");
const checkInTime = document.getElementById("checkintime");
const checkOutTime = document.getElementById("checkouttime");
const btn = document.getElementById("btn");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const mail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return mail.test(String(email).toLowerCase());
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const phoneVlaue = phoneNumber.value;
  const dateValue = date.value;
  const checkInTimeValue = checkInTime.value;
  const checkOutTimeValue = checkOutTime.value;

  if (firstNameValue === "") {
    setError(firstName, "First Name is required");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name is required");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Valid email is required");
  } else {
    setSuccess(email);
  }

  if (phoneVlaue === "") {
    setError(phoneNumber, "Phone Number is required");
  } else {
    setSuccess(phoneNumber);
  }

  if (dateValue === "") {
    setError(date, "Please put the date you arriving");
  } else {
    setSuccess(date);
  }

  if (checkInTimeValue === "") {
    setError(checkInTime, "Please put the time of your arrival");
  } else {
    setSuccess(checkInTime);
  }

  if (checkOutTimeValue === "") {
    setError(checkOutTime, "Please put the time of your departure");
  } else {
    setSuccess(checkOutTime);
  }
});
