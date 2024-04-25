const updated = numbers.filter(element => element > 6);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const randomBoolean = () => Math.random() >= 0.5;
[foo, bar] = [bar, foo];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;