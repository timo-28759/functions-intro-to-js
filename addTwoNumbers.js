const randomBoolean = () => Math.random() >= 0.5;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = [...new Set(a.concat(b))];