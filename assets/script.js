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




function generatePassword(){

  // prompts to determine the length of the password that will be used in the generated password
  let possibleLength = prompt("How long would you like your password? Please choose between 8 and 128 characters in length.")

  //We have to make sure the user submits a valid answer for password length, and then validates the answer.
  
    if (possibleLength < 8) {
      prompt("That isn't a valid amount! Please pick between 8 and 128.")
    }

    else if (possibleLength > 128) {
      prompt("That isn't a valid amount! Please pick between 8 and 128.")
    }
  
    else if (possibleLength > 7 || possibleLength < 129) {
      alert("Your password will contain " + possibleLength + " characters.")
    }
    //Now that we have a valid length of the password, we determine the results of the other criteria and validate them to the user.
  //when the "OK" option is selected in the confirm option, it returns a boolean value of true. When "cancel" is selected, it is false.
  
  let upperChoice = confirm("Would you like the password to contain uppercase characters?")
  
  if (upperChoice===true) {
    alert("Uppercase characters confirmed.");
    possiblePass = possiblePass.concat(upperKeys);
  }
    else if(upperChoice===false) {alert("No uppercase characters will be used!")
  }
  
  let lowerChoice = confirm("Would you like the password to contain lowercase characters?")
  
  if (lowerChoice===true) {
    alert("Lowercase characters confirmed.");
    possiblePass = possiblePass.concat(lowerKeys);
  }
  else if (lowerChoice===false) {
    alert("No lowercase characters will be used!")
  }
  let numberChoice = confirm("Would you like the password to contain numbers?")
  
  if (numberChoice===true) {
    alert("Numbers confirmed.");
    possiblePass = possiblePass.concat(numericKeys);
  }
  else if (numberChoice===false) {
    alert("No numbers will be used!")
  }
  let specialChoice = confirm("Would you like the password to contain special characters?")
  if (specialChoice===true) {
    alert("Special characters confirmed.");
    possiblePass = possiblePass.concat(specialKeys);
  }
  else if (specialChoice===false) {
    alert("No special characters will be used!")
  }
  //For loop used to generate the password using the array of confirmed characters.
  //mathfloor and mathrandom will be used
  for (var i = 0; i < possibleLength; i++) {
    actualPass += possiblePass[Math.floor(Math.random() * possibleLength)];
  }

  //we have to return!!!! cannot forget or else it will be undefined!!!

  return actualPass;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  //I do not know how to remove the current generated password so that clicking starts the process over, so i created an alert
  //that lets the user know they have to refresh first.

  alert("If you would like to generate another password, simply refresh the page anc click Generate Password again.")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
