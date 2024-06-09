console.log("1 || 2 = "+(1 || 2));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const results = await Promise.all(resultingPromises);