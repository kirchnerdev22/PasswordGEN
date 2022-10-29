var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if(!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1- rand) + rand*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword () {

  while (true) {

    var userInput = prompt("How long do you want your password to be?")

    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number, this is a number! ---> 24")
    } else if (passwordLength <8 || passwordLength > 128) {
      window.alert("Let's try again. Password length must be between 8 and 128 characters")
    } else {
      break
    }
    
  }

  var userWantsNumber = window.confirm("Do you want to include numbers in your password?")
  var userWantsSymbols = window.confirm("Do you want to include symbols in your password?")
  var userWantsLowerCase = window.confirm("Do you want to include lowercase letters in your password?")
  var userWantsUpperCase = window.confirm("Do you want to include uppercase letters in your password?")
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var optionsCart = []


  if (userWantsNumber === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userWantsLowerCase === true) {
    optionsCart.push(lowerCaseList)
  }

  if (userWantsUpperCase === true) {
    optionsCart.push(upperCaseList)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowerCaseList)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword
}


function writePassword() {
  var password = generatePassword( );
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  } 

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
