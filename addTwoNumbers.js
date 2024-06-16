const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);