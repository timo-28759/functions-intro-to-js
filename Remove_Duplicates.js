const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const isTabInView = () => !document.hidden;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);