const executableName = getExecutableName(channel, appName);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));