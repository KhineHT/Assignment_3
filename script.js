// Assignment Code
let buttonGenerate = document.getElementById("button-generate");
var textarea = document.getElementById("password");
var length = document.getElementById("length");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");

let characterSet = [
  {
    character: "abcdefghijklmnopqrstuvwxyz",
    name: "Lowercase Letters",
    useCharacter: false
  },

  {
    character: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    name: "Uppercase Letters",
    use: false
  },


  {
    character: "0123456789",
    name: "Number Characters",
    use: false
  },

  {
    character: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    name: "Punctuation",
    use: false
  }
]

//myInput.onfocus = function () {
//const passwordLength = inputPasswordRange.value;
//spanPasswordLength.textContent = passwordLength;
//};

  let passwordLength = parseInt(prompt("Arrange the password length between 8 and 128 characters."));
    let passwordString = "";

   
    if (passwordLength > 8 && passwordLength < 128) {
        characterSet.forEach(set => {
            const useCharacter = (prompt(`Do you want to use ${set.name}?`)).toLowerCase();
            if (useCharacter === "yes" || useCharacter === "y") {
                set.useCharacter = true;
            }
            if(set.useCharacter){
                randomCharString = randomCharString + set.char;
            }
        });
      console.log(password(charSet));
    }
    else {
        alert("Your password does not meet the requirements. Please try again!");
    }

    let password = "";
    for (let index = 0; index < PasswordLength; index++) {
    var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
    password = password + randomCharacter;
    
  }