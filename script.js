// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", function() {
var lengthPwd = prompt("Enter the length of the password required");

while(isNaN(lengthPwd)) {
    alert("Only numbers can be entered. Try again")
    var lengthPwd = prompt("Enter the length of the password required");
}
 
while(lengthPwd == null) {
  alert("Input cannot be empty. Try again.")
  var lengthPwd = prompt("Enter the length of the password required");
}

while(lengthPwd < 8 || length > 128) {
  alert("The password length allowed is at least 8 characters and no more than 128. Try again.")
  var lengthPwd = prompt("Enter the length of the password required");
}
//console.log(lengthPwd);

var charTypes = prompt("Enter lowercase, uppercase, numeric and/or special characters");

while(/^[a-zA-Z]+$/i.test(charTypes)) {
  alert("Your password must contain lowercase, uppercase, numeric and/or special characters. Try again.")
  var charTypes = prompt("Enter any lowercase, uppercase, numeric and/or special characters");
}
//console.log(charTypes);

var generated_password = '';

for(i=0; i<lengthPwd; i++) {
    generated_password += charTypes[Math.floor(Math.random() * charTypes.length)]
}

//console.log("Generated Password:" + generated_password)
//console.log(generated_password.length)
writePassword(generated_password)
})

