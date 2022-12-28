// Assignment code here
//to begin, I'm going to create arrays for the uppercase, lowercase, numeric, and special characters.

const upperKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowerKeys = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numericKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialKeys = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

//Next, an empty array is created to later be filled with the results of the prompted password criteria.

let possiblePass = []

//Empty variable that will be determined the generated password.

let actualPass = ""

// create a function with prompts to determine the length of the password which characters will be used in the generated password

function determinePass(){
let possibleLength = prompt("How long would you like your password? Please choose between 8 and 128 characters in length.")

//We have to make sure the user submits a valid answer for password length, and then validates the answer.

  if (possibleLength < 8 || possibleLength > 128) {
    prompt("That isn't a valid amount! Please pick between 8 and 128.")
  }

  else if (possibleLength > 7 || possibleLength < 129) {
    alert("Your password will contain " + possibleLength + " characters.")
  }

//Now that we have a valid length of the password, we determine the results of the other criteria and validate them to the user.

let upperChoice = confirm("Would you like the password to contain uppercase characters?")

  if (upperChoice) {
    alert("Uppercase characters confirmed.")
  }
    else {alert("No uppercase characters will be used!")
  }
  
let lowerChoice = confirm("Would you like the password to contain lowercase characters?")

  if (lowerChoice) {
    alert("Lowercase characters confirmed.")
  }
  else {
    alert("No lowercase characters will be used!")
  }
let numberChoice = confirm("Would you like the password to contain numbers?")

  if (numberChoice) {
    alert("Numbers confirmed.")
  }
  else {
    alert("No numbers will be used!")
  }
let specialChoice = confirm("Would you like the password to contain special characters?")
  if (specialChoice) {
    alert("Special characters confirmed.")
  }
  else {
    alert("No special characters will be used!")
  }
}

//Now that all the criteria has been picked in a valid way, we must fill the array of possiblePass with said criteria.
//We do this by pushing the values into the arrays based upon whether or not the user confirmed to use them.

function pushPass(){
  if (upperChoice){
    for (i of upperKeys)
    possiblePass.push(i)
  }
  if (lowerChoice){
    for (i of lowerKeys)
    possiblePass.push(i)
  }
  if (numericChoice){
    for (i of numericKeys)
    possiblePass.push(i)
  }
  if (specialChoice){
    for (i of specialKeys)
    possiblePass.push(i)
  }
}

//Finally, we create the password using a for loop.

function createFinal(){
  for (var i = 0; i < possibleLength; i++) {
    actualPass += possiblePass[Math.floor(Math.random() * possibleLength)];
}
return actualPass;
}

function generatePassword(){
  determinePass();
  pushPass();
  createFinal();

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
