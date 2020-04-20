// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)
var lengthPwd = prompt("Enter the length of pwd desired. Must be longer than 8 and less than 128")

generateBtn.addEventListener("click", function() {
var lengthPwd = prompt("Enter the character length of the password desired");

while(isNaN(lengthPwd)) {
    alert("Only enter numbers. Try again")
    var lengthPwd = prompt("Enter the character length of the pwd desired");
}
 
while(lengthPwd == null) {
  alert("Cannot be empty")
  var lengthPwd = prompt("Enter the character length of the pwd desired");
}

while(lengthPwd < 8 || length > 128) {
  alert("Number must be higher than 8 and less than 128")
  var lengthPwd = prompt("Enter the character length of the pwd desired");
}
console.log(lengthPwd);

var charTypes = prompt("Enter any lowercase, uppercase, numeric and/or special characters");

while(/^[a-zA-Z]+$/i.test(charTypes)) {
  alert("Your password must contain lowercase, uppercase, numeric and/or special characters. Try again.")
  var charTypes = prompt("Enter any lowercase, uppercase, numeric and/or special characters");
}
console.log(charTypes);

var generated_password = '';

for(i=0; i<lengthPwd; i++) {
    generated_password += charTypes[Math.floor(Math.random() * charTypes.length)]
}

console.log("Generated Password:" + generated_password)
writePassword(generated_password)
})

