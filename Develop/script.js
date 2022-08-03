// Assignment code here
//special characters
special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~", "(", ")", "_"];
//numeric values 
numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//lower case values
alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//upper case values
alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables that will be used
var length;
var promtLowerCase;
var promtUpperCase;
var promtNumeric;
var promtSpecial;
var promtLength;
var picks;

//start of generatepassword function
function generatePassword() {
  //window promt to get info from user for the length of their password
 length = window.prompt("Choose a password length between 8 and 128");

    //input validation to make sure it is a number value - isNaN determines whether a value is NaN(not a number) or not
    if (isNaN(length)) {
      alert ("Please enter a number!") // alert if the input is not a number
      return generatePassword(); // sends you back to the generate function to try again
    }

    //input validation to make sure the value from the user is atleast 8 characters and no more than 128 characters
    else if (length < 8 || length > 128) {
      alert("The password length must be between 8 and 128 characters") // alert if the password length is not between 8 and 128 characters
      return generatePassword(); // sends you back to the generate function to try again
    }

    //if the user input is a number and is between 8 - 128 it will continue on to ask what they would like in their password
    //This will send the user with a dialog box with a message that they can click ok for yes and cancel for no
    else {
    promtLowerCase = confirm("Will this password use lowercase letters?"); //Ask the user if they would like lowercase letters in their password
    promtUpperCase = confirm("Will this password use uppercase letters?");//Ask the user if they would like uppercase letters in their password
    promtNumeric = confirm("Will this password use numbers?");//Ask the user if they would like numbers in their password
    promtSpecial = confirm("Will this password contain special letters like @ or #?");//Ask the user if they would like special letters in their password
    };
    
    //start of if and if else statements for what the user wanted
    // validation to make sure the user said yes to atleast one option
    if (!promtLowerCase && !promtUpperCase && !promtNumeric && !promtSpecial) {
      picks = alert("Choose atleast one option!"); //sends a alert to the user that they did not select atleast one option
      return generatePassword(); //sends the user back to the generatePassword funtion to try again
    }

    //if the user slected all 4 options to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase && promtUpperCase && promtNumeric && promtSpecial) {
        picks = alphabetLower.concat(alphabetUpper, numeric, special);
    }
     //if the user slected lowercase, uppercase, and numeric to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase && promtUpperCase && promtNumeric) {
      picks = alphabetLower.concat(alphabetUpper, numeric);
    }
     //if the user slected lowercase and uppercase to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase && promtUpperCase) {
      picks = alphabetLower.concat(alphabetUpper);
    }
     //if the user slected lowercase and special characters to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase && promtSpecial) {
      picks = alphabetLower.concat(special);
    }
     //if the user slected lowercase and numeric to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase && promtNumeric) {
      picks = alphabetLower.concat(numeric);
    }
     //if the user slected just lowercase to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtLowerCase) {
      picks = alphabetLower;
    }
     //if the user slected uppercase, numeric, and special characters to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtUpperCase && promtNumeric && promtSpecial) {
      picks = alphabetUpper.concat(numeric, special);
    }
     //if the user slected uppercase and numeric to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtUpperCase && promtNumeric) {
      picks = alphabetUpper.concat(numeric);
    }
     //if the user slected uppercase and special characters to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtUpperCase && promtSpecial) {
      picks = alphabetUpper.concat(special);
    }
     //if the user slected just uppercase lettes to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtUpperCase) {
      picks = alphabetUpper;
    }
     //if the user slected numeric and special characters  to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtNumeric && promtSpecial) {
      picks = numeric.concat(special);
    }
     //if the user slected just numeric values to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtNumeric) {
      picks = numeric;
    }
     //if the user slected just special characters to be in their password
    //.concat will add 2 or more strings together found this in w3schools
    else if (promtSpecial) {
      picks = special;
    };

    //This is an empty array they will hold our length
    var pass1 = [];

    // a for loop the will randomize all of the varaibles for the users password using math floor and math random that will than sends the picks2 variable using .push to are var pasword
    for (var i = 0; i < length; i ++) {
      var picks2 = picks[Math.floor(Math.random() * picks.length)];
      pass1.push(picks2);
    }

    //turns the array into a string that will be sent to the user
    var pass2 = pass1.join("");
    //returns the string that will be outputed to user
    return pass2;

}

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
