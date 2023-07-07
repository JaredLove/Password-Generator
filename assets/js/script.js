

let errorCheck = document.getElementById("error");
let errorCheck2 = document.getElementById("error2");
let errorCheck3 = document.getElementById("error3");

// Generate random password
function generatePassword() {
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChars = "!@#$%^&*()_-+=[]{}<>,.?/~";
  let numberChars = "0123456789";

  let password = "";
  
  let useLowercase = document.getElementById("lowercase").checked;
  let useUppercase = document.getElementById("uppercase").checked;
  let useSpecialChars = document.getElementById("special").checked;
  let useNumbers = document.getElementById("numbers").checked;
  
  let allowedChars = "";
  
  if (useLowercase) {
    allowedChars += lowercaseChars;
  }
  
  if (useUppercase) {
    allowedChars += uppercaseChars;
    
  }
  
  if (useSpecialChars) {
    allowedChars += specialChars;

  }
  
  if (useNumbers) {
    allowedChars += numberChars;
   
  }
  
  if (allowedChars === "") {
    errorCheck2.classList.remove("error2");
    errorCheck2.classList.add("error2-show");
  }
  
  let passwordLengthInput = document.getElementById("password-length");
  let passwordLength = parseInt(passwordLengthInput.value);
  
  if (isNaN(passwordLength)) {
    errorCheck.classList.remove("error");
    errorCheck.classList.add("error-show");

  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    errorCheck3.classList.remove("error3");
    errorCheck3.classList.add("error3-show");
  }

  
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  
  return password;
}

// Update password field with generated password
function updatePassword() {
  let passwordField = document.getElementById("password");
  passwordField.value = generatePassword();
}

function exit() { 
  throw new Error("invalid input");
}

let body = document.body;
let cardDark = document.getElementById("card");
let h1Dark = document.getElementById("h1");
function toggleDarkMode() {
  let darkModeBtn = document.getElementById("dark-mode-btn");
  let lightModeBtn = document.getElementById("light-mode-btn");
  
  document.body.classList.add("dark-mode");
  cardDark.classList.add("dark-mode");
  h1Dark.classList.add("dark-mode");
  
  darkModeBtn.style.display = "none";
  lightModeBtn.style.display = "inline-block";
}

function toggleLightMode() {
  let darkModeBtn = document.getElementById("dark-mode-btn");
  let lightModeBtn = document.getElementById("light-mode-btn");
  
  document.body.classList.remove("dark-mode");
  cardDark.classList.remove("dark-mode");
  h1Dark.classList.remove("dark-mode");
  darkModeBtn.style.display = "inline-block";
  lightModeBtn.style.display = "none";
}

let darkModeBtn = document.getElementById("dark-mode-btn");
let lightModeBtn = document.getElementById("light-mode-btn");

// Add event listener to the generate button
let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", updatePassword);

darkModeBtn.addEventListener("click", toggleDarkMode);
lightModeBtn.addEventListener("click", toggleLightMode);

lightModeBtn.style.display = "none";
