const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const timeFromDate = date => date.toTimeString().slice(0, 8);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);