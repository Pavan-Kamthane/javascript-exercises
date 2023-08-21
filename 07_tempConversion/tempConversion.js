const convertToCelsius = function() {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
};

const convertToFahrenheit = function() {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
