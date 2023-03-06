const convertToCelsius = function(fTemp) {
  const cTemp = Math.round((fTemp - 32) / 9 * 5 * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = Math.round(((cTemp * 9 / 5) + 32) * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
