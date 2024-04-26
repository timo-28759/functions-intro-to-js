const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const flattenedArray = arr => [].concat(...arr);
console.log(false == '0');
const randomString = () => Math.random().toString(36).slice(2);
const appName = getAppName(channel);