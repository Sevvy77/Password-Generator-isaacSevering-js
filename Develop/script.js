// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = undefined;
var uppercase = undefined;
var lowercase = undefined;
var numeric = undefined;
var specialCharacters = undefined;

// Write password to the #password input

 function validLength() {
  passwordLength = parseInt(prompt("How long would you like your password to be? it must be between 8 and 128 characters. (please enter a number value)",))
   if (8>passwordLength||passwordLength>128||isNaN(passwordLength)){
     window.alert("invalid character length.");
     validLength();
   } else {
     alert("your password  will be "+passwordLength+" characters long.")
     
   }
   return;
 };

 function lowercasePrompt() {
   lowercase = confirm("include lowercase letters?");
   if (lowercase===true){
     alert("lowercase letters will be included");
   } else {
     alert("lowercase letters will not be included");
   };
   return;
 };

 function  uppercasePrompt(){
   uppercase = confirm("include uppercase letters?");
   if (uppercase===true){
    alert("uppercase letters will be included");
  } else {
    alert("uppercase letters will not be included");
  };
  return;
 };

 function numericPrompt(){
   numeric = confirm("include numeric characters?");
   if (numeric===true){
    alert("numbers will be included");
  } else {
    alert("numbers will not be included");
  };
  return;
 };

 function specialPrompt(){
   specialCharacters = confirm("include special characters? (!@$#%^&*...etc)");
   if (specialCharacters===true){
    alert("special characters will be included");
  } else {
    alert("special characters will not be included");
  };
  return;
 };

 function completionPrompt(){
   alert("thank you for your input(s)");

  return;
 };

 function generatePassword() {
  var upperLetterArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
  var lowerLetterArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  var numericArray = ["1","2","3","4","5","6","7","8","9"];
  var specialArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","?",">","<",",","."];
  var masterArray = []
  var childArray = []

  if (numeric===true){
    masterArray=masterArray.concat(numericArray);
  };
  if(uppercase===true){
    masterArray=masterArray.concat(upperLetterArray);
  };
  if (lowercase===true){
    masterArray=masterArray.concat(lowerLetterArray);
  };
  if(specialCharacters===true){
    masterArray=masterArray.concat(specialArray);
  };
  for (let i = 0; i < passwordLength; i++) {
    childArray.push(masterArray[Math.floor(Math.random()*masterArray.length)]);
  };
  return childArray.join("");
 };

 function writePassword() {
  validLength();
  lowercasePrompt();
  uppercasePrompt();
  numericPrompt();
  specialPrompt();
  completionPrompt();
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
 
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

