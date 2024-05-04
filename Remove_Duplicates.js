const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');