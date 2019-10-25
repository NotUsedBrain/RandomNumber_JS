function randomNumber(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert('You must enter numbers. Please try again.');
//    throw new Error('Both arguments must be numbers'); // commented Error out as it stops rest of the script and imho is better not to use Error and just check console
    window.location.reload();
  }
  return Math.floor(Math.random() * (Math.max(number1, number2) - Math.min(number1, number2) + 1)) + Math.min(number1, number2)
}

var number1 = parseInt(prompt('Please give me a number'));

var number2 = parseInt(prompt('Please give me a second number'));

document.write('<p>' + 'The random number between ' + Math.min(number1, number2) + ' and ' + Math.max(number1, number2) + ' is ' + randomNumber(number1, number2) + '</p>');

// all code suggestions by Bill @ DigitalJersey Programming Course, a coding legend! 