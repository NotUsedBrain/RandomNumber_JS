function randomNumber(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert('You must enter numbers. Please refresh the page and try again.');
    throw new Error('Both arguments must be numbers');
  }
  if (number1 <= number2) {
    var randomNumber = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
  } else {
    var randomNumber = Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
  }
  return randomNumber;
}

var number1 = prompt('Please give me a number');
number1 = parseInt(number1);

var number2 = prompt('Please give me a second number');
number2 = parseInt(number2);

var finalNumber = ( randomNumber(number1, number2) );

if (number1 <= number2) { 
  document.write('<p>' + 'The random number between ' + number1 + ' and ' + number2 + ' is ' + finalNumber + '</p>');
} else {
  document.write('<p>' + 'The random number between ' + number2 + ' and ' + number1 + ' is ' + finalNumber + '</p>');
}
