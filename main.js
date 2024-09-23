const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zipCode = document.getElementById("zipCode");
const zipCodeError = document.querySelector("#zipCode + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const passwordConfirmation = document.getElementById("passwordConfirmation");
const passwordConfirmationError = document.querySelector(
  "#passwordConfirmation + span.error"
);

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  }
}

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showCountryError();
  }
});

form.addEventListener("submit", (event) => {
  if (!country.validity.valid) {
    showCountryError();
    event.preventDefault();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country.";
  }
}

zipCode.addEventListener("input", (event) => {
  if (zipCode.value.length >= 4) {
    zipCodeError.textContent = "";
    zipCodeError.className = "error";
  } else {
    showZipCodeError();
  }
});

form.addEventListener("submit", (event) => {
  if (!zipCode.validity.valid) {
    showZipCodeError();
    event.preventDefault();
  }
});

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a zip code.";
  } else if (zipCode.value.length < 4) {
    zipCodeError.textContent = `Zip Code should be at least 4 characters; you entered ${zipCode.value.length}.`;
  }
}

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showPasswordError();
  }
});

form.addEventListener("submit", (event) => {
  if (!password.validity.valid) {
    showPasswordError();
    event.preventDefault();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  }
}

passwordConfirmation.addEventListener("input", (event) => {
  if (passwordConfirmation.value === password.value) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.className = "error";
  } else {
    showPasswordConfirmationError();
  }
});

form.addEventListener("submit", (event) => {
  if (!passwordConfirmation.validity.valid) {
    showPasswordConfirmationError();
    event.preventDefault();
  }
});

function showPasswordConfirmationError() {
  if (passwordConfirmation.validity.valueMissing) {
    passwordConfirmationError.textContent =
      "You need to enter a password confirmation.";
  } else if (passwordConfirmation.value !== password.value) {
    passwordConfirmationError.textContent = "Passwords do not match.";
  }
}

form.addEventListener("submit", (event) => {
  if (form.checkValidity()) {
    alert("High five!");
  }
});
