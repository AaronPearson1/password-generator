// Assignment code here. # used due to id attribute in HTML
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays for Character Variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "'"];

// Variable Declarations
var passwordLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSymbols;

// Users Prompts. This will confirm password length criteria as well as user choice of password character types
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to be?");

  // Loop is conditions are not met
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8-128 characters! Please try again.");
    var passwordLength = window.prompt("How many characters would you like your password to be?");
  }
    alert("Your password will have " + passwordLength + " characters.");

  var confirmLowerCase = confirm("Click OK to confirm if you would like your password to include lowercase letters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like your password to include uppercase letters");
  var confirmNumbers = confirm("Click OK to confirm if you would like your password to include numerical values");
  var confirmSymbols = confirm("Click OK to confirm if you would like your password to include symbols and/or special characters");
    //Loop if conditions not met
    while (!(confirmLowerCase || confirmUpperCase || confirmNumbers || confirmSymbols)) {
      alert("You must select at least one character type!");
      var confirmLowerCase = confirm("Click OK to confirm if you would like your password to include lowercase letters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like your password to include uppercase letters");
      var confirmNumbers = confirm("Click OK to confirm if you would like your password to include numerical values");
      var confirmSymbols = confirm("Click OK to confirm if you would like your password to include symbols and/or special characters");
    } 

      var randomCharacters = []

      if (confirmLowerCase) {
        randomCharacters = randomCharacters.concat(lowercase)
      }

      if (confirmUpperCase) {
        randomCharacters = randomCharacters.concat(uppercase)
      }

      if (confirmNumbers) {
        randomCharacters = randomCharacters.concat(numbers)
      }

      if (confirmSymbols) {
        randomCharacters = randomCharacters.concat(symbols)
      }

      console.log(randomCharacters)

      // Select random characters from the arrays created at the top of JS file
      var securePassword = ""

      for (var i = 0; i < passwordLength; i++) {
        securePassword = securePassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
        console.log(securePassword)
      }
      return securePassword
}
// Password to display in the "Your Secure Password" textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


