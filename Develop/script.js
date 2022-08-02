// Assignment code here
var promtLowerCase;
var promtUpperCase;
var promtNumeric;
var promtSpecial;
var promtLength;

//"\"
special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~", "(", ")", "_"]
numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9]
alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function generatePassword() {
  var length = window.prompt("Choose a password length between 8 and 128")  
  
  if (!length) {
      alert("Choose a correct length between 8 and 128")
      return generatePassword()
    }

    else if (length < 8 || length > 128) {
      alert("The password length must be between 8 and 128 characters")
      return generatePassword()
    }

    else {
    promtLowerCase = confirm("Will this password use lowercase letters?")
    promtUpperCase = confirm("Will this password use Uowercase letters?")
    promtNumeric = confirm("Will this password use numbers?")
    promtSpecial = confirm("Will this password contain special letters?")
    };
   
    if (!promtLowerCase && !promtUpperCase && !promtNumeric && !promtSpecial) {
      picks = alert("Choose atleast one option!")
      return generatePassword();
    }

    else if (promtLowerCase && promtUpperCase && promtNumeric && promtSpecial) {

    }

    else if (promtLowerCase && promtUpperCase && promtNumeric) {
      
    }

    else if (promtLowerCase && promtUpperCase) {
      
    }

    else if (promtLowerCase && promtSpecial) {
      
    }

    else if (promtLowerCase && promtNumeric) {
      
    }

    else if (promtLowerCase) {
      
    }

    else if (promtUpperCase && promtNumeric && promtSpecial) {

    }

    else if (promtUpperCase && promtNumeric) {

    }

    else if (promtUpperCase && promtSpecial) {

    }

    else if (promtUpperCase) {

    }

    else if (promtNumeric && promtSpecial) {
      
    }

    else if (promtNumeric) {

    }

    else if (promtSpecial) {

    }

    



      
    
  //return("password")
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
