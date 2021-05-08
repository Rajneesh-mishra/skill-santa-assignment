// 3. Write a JavaScript program function to convert temperatures
// from Celsius, Fahrenheit and Fahrenheit to Celsius as per user
// arguments provide in functions

const temperatureConverter = (temp, convertTo) => {
  let result;
  if (convertTo.toLowerCase().indexOf("c") >= 0) {
    result = `${(((temp - 32) * 5) / 9).toFixed(2)}°C`;
  } else {
    result = `${((temp * 9) / 5 + 32).toFixed(2)}°F`;
  }
  return result;
};

let temp = Number(prompt("Enter the temperature (Ex: 23)"));
let convertTo = prompt("Convert to (Ex: F for Fahrenheit and C for Celsius");
let result = temperatureConverter(temp, convertTo);
document.write(result);

// This condition will make it work even if user type celsius or c because Fahrenheit don't have c
// valid input is considered
