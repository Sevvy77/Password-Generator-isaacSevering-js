// defining all variables i'd like to be globaly scoped
var generateBtn = document.querySelector("#generate");
var passwordLength = undefined;
var uppercase = undefined;
var lowercase = undefined;
var numeric = undefined;
var specialCharacters = undefined;

// making function for user to input desired length of password, as well as logic for prompts and redirection if the value they input isn't a number
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
// making function for confirmation if the user wants lowercases, returns boolean value as the new value of variable.
 function lowercasePrompt() {
   lowercase = confirm("include lowercase letters?");
   if (lowercase===true){
     alert("lowercase letters will be included");
   } else {
     alert("lowercase letters will not be included");
   };
   return;
 };
// making function for confirmation if the user wants capital letters, returns boolean value as the new value of variable.
 function  uppercasePrompt(){
   uppercase = confirm("include uppercase letters?");
   if (uppercase===true){
    alert("uppercase letters will be included");
  } else {
    alert("uppercase letters will not be included");
  };
  return;
 };
// making function for confirmation if the user wants numbers, returns boolean value as the new value of variable.
 function numericPrompt(){
   numeric = confirm("include numeric characters?");
   if (numeric===true){
    alert("numbers will be included");
  } else {
    alert("numbers will not be included");
  };
  return;
 };
// making function for confirmation if the user wants special characters, returns boolean value as the new value of variable.
 function specialPrompt(){
   specialCharacters = confirm("include special characters? (!@$#%^&*...etc)");
   if (specialCharacters===true){
    alert("special characters will be included");
  } else {
    alert("special characters will not be included");
  };
  return;
 };
//prompts user with an alert that tells them they have finished inputing data for the password generator.
 function completionPrompt(){
   alert("thank you for your input(s)");

  return;
 };

 function generatePassword() {
   //declaring arrays to coorespond with the choices from the prompts
  var upperLetterArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
  var lowerLetterArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  var numericArray = ["1","2","3","4","5","6","7","8","9"];
  var specialArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","?",">","<",",","."];
  var masterArray = []
  var childArray = []
//combines applicable arrays to be put together into a master array
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
  // this for loop adds a random index of the master array to the child array, to make an array the length of the desired password character length
  for (let i = 0; i < passwordLength; i++) {
    childArray.push(masterArray[Math.floor(Math.random()*masterArray.length)]);
  };
  // causes the function to return all elements of the generated child array as a string, with no spaces between the characters.
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

