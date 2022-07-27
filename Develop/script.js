// Assignment Code
var generateBtn = document.querySelector("#generate");

let generatePasswordLength = () => {
  let passwordLength = parseInt(prompt("How long Will The Password Be"));
  if (passwordLength < 8 || passwordLength || isNaN(passwordLength)) {
  } else {
    alert("Number Has To Be Between 8 and 128");
  }

  return passwordLength;
};

let getPasswordCriteria = () => {
  let passwordLength = generatePasswordLength();
  console.log("passwordLength: " + passwordLength);
  let totalString = "";

  if (confirm("Do You Want Lowercase Letters")) {
    totalString += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Do You Want Uppercase Letters")) {
    totalString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Do You Want Number")) {
    totalString += "0123456789";
  }
  if (confirm("Do You Want Special Characters")) {
    totalString += ' !"$#()*+,-%&./:;<=>?@[]^_`{|}~';
  }
  let passwordInput = [passwordLength, totalString];
  console.log("password Input:  " + passwordInput);
  return passwordInput;
};

let generatePassword = () => {
  let passwordCriteria = getPasswordCriteria();

  //[passwordLength, totalString]
  console.log("passwordCriteria: " + passwordCriteria);
  let passwordArray = passwordCriteria[1].split("");

  console.log(passwordArray);
  let result = [];

  for (let i = 0; i < passwordArray.length; i++) {
    let key = Math.floor(Math.random() * passwordArray.length);
    let digit = passwordArray[key];
    result.push(digit);
  }

  console.log("result: " + result);

  return result.join(""); //return a string
};
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
