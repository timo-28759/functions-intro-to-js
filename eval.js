const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const flattenedArray = arr => [].concat(...arr);