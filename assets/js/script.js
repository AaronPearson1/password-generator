// Assignment code here. # used due to id attribute in HTML
document.querySelector("#generate").addEventListener("click", writePassword);

// Users Prompts. This will confirm password length criteria as well as user choice of password character types
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to be?");

  // Loop is conditions are not met
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8-128 characters! Please try again.");
    var passwordLength = window.prompt("How many characters would you like your password to be?");
  }

  var lowerCaseCharacter = confirm("Would lyou ike your password to include lowercase letters?");
  var upperCaseCharacter = confirm("Would you like your password to include uppercase letters?");
  var numbersCharacter = confirm("Would like your password to include numerical values?");
  var symbolsCharacter = confirm("Would like your password to include symbols and/or special characters?");
    //Loop if conditions not met
    while (!(lowerCaseCharacter || upperCaseCharacter || numbersCharacter || symbolsCharacter)) {
      alert("You must select at least one character type!");
      var lowerCaseCharacter = confirm("Would like your password to include lowercase letters");
      var upperCaseCharacter = confirm("Would like your password to include uppercase letters");
      var numbersCharacter = confirm("Would like your password to include numerical values");
      var symbolsCharacter = confirm("Would you like your password to include symbols and/or special characters");
    } 

      var randomCharacters = []

      if (lowerCaseCharacter) {
        randomCharacters = randomCharacters.concat(lowercase)
      }

      if (upperCaseCharacter) {
        randomCharacters = randomCharacters.concat(uppercase)
      }

      if (numbersCharacter) {
        randomCharacters = randomCharacters.concat(numbers)
      }

      if (symbolsCharacter) {
        randomCharacters = randomCharacters.concat(symbols)
      }

      // Select random characters from the arrays created at the top of JS file
      var securePassword = ""

      for (var i = 0; i < passwordLength; i++) {
        securePassword = securePassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
      }
      return securePassword
}
// Password to display in the "Your Secure Password" textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Arrays for Character Variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "'"];

// Variable Declarations
var passwordLength = "";
var lowerCaseCharacter;
var upperCaseCharacter;
var numbersCharacter;
var symbolsCharacter;


