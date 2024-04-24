const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const currentDate = () => new Date().toLocaleDateString('en-US');
var DELIM_SIZE = 4;
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;