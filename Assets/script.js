// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("Choose how many characters to use, choose a number between 8 and 128")
reject()
function reject(){
  if(length < 8 || length >128){
    alert("Password must be between 8 and 128 characters")
    location.reload();
    }
  } 
var upper = confirm("Include Uppercase?")
var lower = confirm("Include Lowercase?")
var number = confirm("Include Numbers?")
var special = confirm("Include Special characters?")
var characters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characters2= "abcdefghijklmnopqrstuvwxyz"
var characters3= "0123456789"
var characters4= "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Write password to the #password input

function generatePassword() {
  charSet = "";
  
  if(upper) { 
    charSet += characters1;
  }
  if(lower) {
    charSet += characters2;
  }
  if(number) {
    charSet += characters3;
  }
  if(special) {
    charSet += characters4;
  }

  var retVal = "";
  for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
  return retVal;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
