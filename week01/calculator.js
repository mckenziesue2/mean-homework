var ask = require('readline-sync');

console.log('Write an equation! Use +, -, /, or * with any digits.');

var equation = ask.question('What is your equation?');
//var equation = prompt('What is your equation?');

var noSpaces = equation.replace(' ', '');

var divisionLocation = equation.indexOf("/");
var additionLocation = equation.indexOf("+");
var subtractionLocation = equation.indexOf("-");
var multiplicationLocation = equation.indexOf("*");

if (divisionLocation > -1) {
  var mathLocation = divisionLocation;
} else if (multiplicationLocation > -1) {
  var mathLocation = multiplicationLocation;
} else if (subtractionLocation > -1) {
  var mathLocation = subtractionLocation;
} else {
  var mathLocation = additionLocation;
}

var firstNumber = equation.substr(0, mathLocation);
var nextNumber = equation.substr(mathLocation + 1);

if (divisionLocation > -1) {
  var answer = firstNumber /= nextNumber;
} else if (multiplicationLocation > -1) {
  var answer = firstNumber *= nextNumber;
} else if (subtractionLocation > -1) {
  var answer = firstNumber -= nextNumber;
} else {
  var answer = firstNumber += nextNumber;
}

console.log(answer);